import Dialog from "@mui/material/Dialog";
import "css/add-notes-modal.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { Context as JobsContext } from "contexts/JobsContext";
import { Context as AuthContext } from "contexts/AuthContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import { usePopupScrollLoader } from "hooks/usePopupScrollLoader";
import moment from "moment";
import { CircularProgress, Link, Tooltip } from "@mui/material";
import { convertUTCDateToLocalDate } from "hooks/UtcToLocalDateTime";
import DelayedOutput from "components/DelayedOutput";
import { IoClose, IoCloseCircleSharp, IoPencil } from "react-icons/io5";
import CustomEditor from "components/CustomEditor4";
import CommonDeleteModal from "components/CommonDeleteModal";

const AddNotesModal = ({ resource_id, type, open, setOpen, handleClose }) => {

  const [note, setNote] = useState("");
  const [notesData, setNotesData] = useState([]);
  const [message, setMessage] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editing, setEditing] = useState(false);

  const {
    state: { notes, notesNextPage, isLoading },
    getNotes,
    addNote,
    updateNote,
    deleteNote,
    getNextPageNotes
  } = useContext(JobsContext);

  const {
    state: { user },
  } = useContext(AuthContext);

  const {
    showAlert,
  } = useContext(AnimatedAlertContext);

  const submitNote = async () => {
    if (selectedNote?.id) {
      await updateNote(selectedNote.id, {
        body: note,
      }, () => {
        // setMessage("Note successfully updated")
        setNote('');
        setSelectedNote(null);
        showAlert('Note successfully updated');
        handleClose();
        setEditing(false);
      });
    } else {
      await addNote({
        resource_type: type,
        resource_id,
        body: note,
      }, () => {
        // setMessage('Note successfully saved')
        // getNotes(user.uuid, resource_id, type);
        setNote('');
        showAlert('Note successfully saved');
        handleClose();
      });
    }
  };

  const onEditNote = async (item) => {
    setNote(item.body);
    setSelectedNote(item);
    setEditing(true);
  };

  const onCancelEditNote = async () => {
    setSelectedNote(null);
    setNote('');
    setMessage(false);
    setEditing(false);
  };

  const onDeleteNote = async (item) => {
    await deleteNote(item.id, () => {
      setNote('');
      showAlert('Note successfully deleted');
      handleClose();
    });
  };

  useEffect(() => {
    if (open && user) {
      getNotes(user.uuid, resource_id, type);
    }
  }, [open, user]);

  useEffect(() => {
    setNotesData(notes || []);
  }, [notes]);

  useEffect(() => {
    setSelectedNote(null);
    setNote('');
    setMessage(false);
    setNotesData([]);
  }, [open]);

  const loadMore = () => {
    if (notesNextPage) getNextPageNotes(user.uuid, resource_id, type, notesNextPage);
  };

  usePopupScrollLoader(isLoading, loadMore);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      scroll="body"
      maxWidth="md"
      fullWidth
      className="z-9999999!"
    >
      <div className="add-note-modal">
        <div className="close-modal"><IoCloseCircleSharp size={30} onClick={(e) => setOpen(false)} /></div>
        <div className="addnote-header"></div>
        <div className="addnote-body">
          <div className="job-apply-email-form-wrapper">
            <div className="inner">
              <h3 className="text-center">
                <span>Add Note</span>
              </h3>

              {message && (
                <div className={`alert alert-info note-alert`}>
                  {message}
                  <IoCloseCircleSharp className="note-alert-close" onClick={() => setMessage(false)} />
                </div>
              )}

              <div className="form-group">
                <label>Message</label>
                {editing && (
                  <CustomEditor
                    value={note}
                    setValue={setNote}
                    enableAdvanceEditor={true}
                    placeholder=""
                  />
                )}
                {!editing && (
                  <CustomEditor
                    value={note}
                    setValue={setNote}
                    enableAdvanceEditor={true}
                    placeholder=""
                  />
                )}
              </div>
              <input type="hidden" name="action" />
              <input type="hidden" name="application_id" />
              <button
                onClick={submitNote}
                className="btn btn-gray btn-hover-primary text-uppercase ls-3 w-100 mt-3 p-3 fs-5"
              >
                {selectedNote?.id ? 'Update' : 'Add'} Note
              </button>
              {selectedNote?.id && (<Link className="reset-note" onClick={(e) => onCancelEditNote(e)}>Cancel</Link>)}
              <div className="text-center mb-1 mt-1" style={{ visibility: isLoading ? 'visible' : 'hidden' }}>
                <CircularProgress size={20} />
              </div>
              <div className="notes-list-item">
                {!isLoading && notesData?.length > 0 ? (
                  <>
                    <h3 className="text-center mb-4">
                      <span>Recent Notes</span>
                    </h3>
                    {notesData.map((note) => (
                      <div key={note.id} className="note-item fs-5">
                        <div dangerouslySetInnerHTML={{ __html: note.body }}></div>
                        <p className="mb-0">
                          <small>
                            {/* <TimeAgo datetime={note.updated_at} />,&nbsp; */}
                            {/* {convertUTCDateToLocalDate(note.created_at).toString()} */}
                            {moment(convertUTCDateToLocalDate(note.created_at)).format(
                              "D MMMM, YYYY hh:mm A"
                            )}
                          </small>
                        </p>
                        <div className="notes-action">
                          <Tooltip title="Edit">
                            <Link
                              className="btn p-0 border-0 btn-hover-primary"
                              onClick={(e) => onEditNote(note)}
                            >
                              <IoPencil className="icon-rounded" />
                            </Link>
                          </Tooltip>

                          <Tooltip title="Remove">
                            <Link
                              className="btn p-0 border-0 btn-hover-primary"
                              onClick={(e) => setDeleteModalOpen(true)}
                            >
                              <IoClose className="icon-rounded" />
                            </Link>
                          </Tooltip>
                          <CommonDeleteModal
                            title="Confirming Deletion Request"
                            message="Are you sure you want to delete this note?"
                            open={deleteModalOpen}
                            setOpen={setDeleteModalOpen}
                            onConfirm={() => onDeleteNote(note)}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="load-more text-center">
                      {isLoading && (
                        <div className="spinner-border text-light" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <DelayedOutput delay={5000}>
                    <p>You currently have no notes entered.</p>
                  </DelayedOutput>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddNotesModal;
