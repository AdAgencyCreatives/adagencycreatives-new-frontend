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
import TailwindCircularLoader from "components/TailwindCircularLoader";
import CallToActionButton from "components/CallToActionButton";
import DropdownMenu from "components/DropdownMenu";
import DropdownMenuItemButton from "components/DropdownMenuItemButton";

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

    if (note?.length > 0) {
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
    } else {
      showAlert('Note is empty');
    }

  };

  const onEditNote = async (item) => {
    setNote(item.body);
    setSelectedNote(item);
    setEditing(true);
  };

  const onCancelEditNote = async (e) => {
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

  return open && (
    <div className="fixed left-0 top-0 flex flex-row justify-center items-center min-w-screen min-h-screen z-999998">
      <div className="fixed left-0 top-0 flex flex-row justify-center items-center w-screen h-screen z-0 bg-gray/30 backdrop-blur-[5px]"></div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        scroll="body"
        maxWidth="4xl"
        fullWidth
        className="z-999998!"
      >
        <div className={[
          "add-note-modal relative! max-sm:w-full! w-[70%]! mx-auto! bg-black! text-white! border! border-gray-400!",
          "max-sm:border-[0.135rem]! border-[0.111rem]! md:border-[0.135rem]! xl:border-[0.148rem]! 2xl:border-[0.156rem]! 3xl:border-[0.208rem]! 4xl:border-[0.277rem]!",
          "max-sm:rounded-[1.735rem]! rounded-[1.422rem]! md:rounded-[1.735rem]! xl:rounded-[1.897rem]! 2xl:rounded-[2rem]! 3xl:rounded-[2.667rem]! 4xl:rounded-[3.556rem]!",
          "max-sm:my-[7.806rem]! my-[6.4rem]! md:my-[7.806rem]! xl:my-[8.538rem]! 2xl:my-[9rem]! 3xl:my-[12rem]! 4xl:my-[16rem]!"
        ].join(' ')}
        >
          <button
            onClick={(e) => setOpen(false)}
            className={[
              "absolute text-current hover:text-primary",
              "max-sm:text-[1.25rem] text-[1.6rem] md:text-[1.952rem] xl:text-[2.134rem] 2xl:text-[2.25rem] 3xl:text-[3rem] 4xl:text-[4rem]",
              "max-sm:top-[0.867rem]! top-[0.711rem]! md:top-[0.867rem]! xl:top-[0.949rem]! 2xl:top-[1rem]! 3xl:top-[1.333rem]! 4xl:top-[1.778rem]!",
              "max-sm:right-[0.867rem]! right-[0.711rem]! md:right-[0.867rem]! xl:right-[0.949rem]! 2xl:right-[1rem]! 3xl:right-[1.333rem]! 4xl:right-[1.778rem]!",
            ].join(' ')}
            aria-label="Close"
          >
            <IoClose />
          </button>
          <div className="addnote-header"></div>
          <div className="addnote-body">
            <div className="job-apply-email-form-wrapper">
              <div className="inner flex flex-col max-sm:gap-[0.867rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                <div className="text-center text-primary font-bold max-sm:text-[1.067rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem]">
                  My Notes
                </div>

                {message && (
                  <div className={`alert alert-info note-alert`}>
                    {message}
                    <IoCloseCircleSharp className="note-alert-close" onClick={() => setMessage(false)} />
                  </div>
                )}

                <div className="flex flex-col max-sm:gap-[0.867rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                  <div className="font-bold max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                    Message
                  </div>
                  {editing && (
                    <CustomEditor
                      value={note}
                      setValue={setNote}
                      enableAdvanceEditor={true}
                      placeholder=""
                      className="bg-black text-white"
                    />
                  )}
                  {!editing && (
                    <CustomEditor
                      value={note}
                      setValue={setNote}
                      enableAdvanceEditor={true}
                      placeholder=""
                      className="bg-black text-white"
                    />
                  )}
                </div>
                <input type="hidden" name="action" />
                <input type="hidden" name="application_id" />
                <div className="flex justify-end max-sm:gap-[0.867rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem] max-sm:my-[0.434rem] my-[0.356rem] md:my-[0.434rem] xl:my-[0.474rem] 2xl:my-[0.5rem] 3xl:my-[0.667rem] 4xl:my-[0.889rem]">
                  {selectedNote?.id && (
                    <CallToActionButton
                      className={[
                        "uppercase outline-white! hover:outline-primary! text-white! hover:text-primary! max-w-max! ",
                        "max-sm:px-[1.735rem]! px-[1.422rem]! md:px-[1.735rem]! xl:px-[1.897rem]! 2xl:px-[2rem]! 3xl:px-[2.667rem]! 4xl:px-[3.556rem]!",
                        "max-sm:py-[0.434rem]! py-[0.356rem]! md:py-[0.434rem]! xl:py-[0.474rem]! 2xl:py-[0.5rem]! 3xl:py-[0.667rem]! 4xl:py-[0.889rem]!",
                        "max-sm:text-[0.5rem]! text-[0.444rem]! md:text-[0.542rem]! xl:text-[0.593rem]! 2xl:text-[0.625rem]! 3xl:text-[0.833rem]! 4xl:text-[1.111rem]!",
                        "max-sm:outline-[0.133rem]! outline-[0.133rem]! md:outline-[0.133rem]! xl:outline-[0.133rem]! 2xl:outline-[0.141rem]! 3xl:outline-[0.188rem]! 4xl:outline-[0.25rem]!",
                      ].join(' ')}
                      onClick={(e) => onCancelEditNote(e)}
                    >
                      Cancel
                    </CallToActionButton>
                  )}
                  <CallToActionButton
                    className={[
                      "uppercase outline-white! hover:outline-primary! text-white! hover:text-primary! max-w-max! ",
                      "max-sm:px-[1.735rem]! px-[1.422rem]! md:px-[1.735rem]! xl:px-[1.897rem]! 2xl:px-[2rem]! 3xl:px-[2.667rem]! 4xl:px-[3.556rem]!",
                      "max-sm:py-[0.434rem]! py-[0.356rem]! md:py-[0.434rem]! xl:py-[0.474rem]! 2xl:py-[0.5rem]! 3xl:py-[0.667rem]! 4xl:py-[0.889rem]!",
                      "max-sm:text-[0.5rem]! text-[0.444rem]! md:text-[0.542rem]! xl:text-[0.593rem]! 2xl:text-[0.625rem]! 3xl:text-[0.833rem]! 4xl:text-[1.111rem]!",
                      "max-sm:outline-[0.133rem]! outline-[0.133rem]! md:outline-[0.133rem]! xl:outline-[0.133rem]! 2xl:outline-[0.141rem]! 3xl:outline-[0.188rem]! 4xl:outline-[0.25rem]!",
                    ].join(' ')}
                    onClick={submitNote}
                  >
                    {selectedNote?.id ? 'Update' : 'Add'} Note
                  </CallToActionButton>
                </div>
                <div className="notes-list-item max-sm:pb-[1.735rem] pb-[1.422rem] md:pb-[1.735rem] xl:pb-[1.897rem] 2xl:pb-[2rem] 3xl:pb-[2.667rem] 4xl:pb-[3.556rem]">
                  {notesData?.length > 0 ? (
                    <>
                      <div className="font-bold text-center max-sm:text-[0.867rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]  max-sm:pb-[1.735rem] pb-[1.422rem] md:pb-[1.735rem] xl:pb-[1.897rem] 2xl:pb-[2rem] 3xl:pb-[2.667rem] 4xl:pb-[3.556rem]">
                        Recent Notes
                      </div>
                      <div className="flex flex-col max-sm:gap-[0.867rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                        {notesData.map((note, index) => (
                          <div key={index} className={`flex items-start max-sm:mb-[0.434rem] mb-[0.356rem] md:mb-[0.434rem] xl:mb-[0.474rem] 2xl:mb-[0.5rem] 3xl:mb-[0.667rem] 4xl:mb-[0.889rem] ${index < notes.length - 1 ? 'border-b border-b-gray-400 max-sm:border-b-[0.135rem] border-b-[0.111rem] md:border-b-[0.135rem] xl:border-b-[0.148rem] 2xl:border-b-[0.156rem] 3xl:border-b-[0.208rem] 4xl:border-b-[0.277rem]' : ''}`}>
                            <div key={note.id} className="flex flex-col flex-1">
                              <div className="font-bold max-sm:text-[0.867rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]"
                                dangerouslySetInnerHTML={{ __html: note.body }}></div>
                              <div className="max-sm:text-[0.651rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                {/* <TimeAgo datetime={note.updated_at} />,&nbsp; */}
                                {/* {convertUTCDateToLocalDate(note.created_at).toString()} */}
                                {moment(convertUTCDateToLocalDate(note.created_at)).format(
                                  "D MMMM, YYYY hh:mm A"
                                )}
                              </div>
                            </div>
                            <DropdownMenu >
                              <DropdownMenuItemButton text="Edit" onClick={(e) => onEditNote(note)} />
                              <DropdownMenuItemButton text="Remove" onClick={(e) => setDeleteModalOpen(true)} />
                            </DropdownMenu>
                            <CommonDeleteModal
                              title="Confirming Deletion Request"
                              message="Are you sure you want to delete this note?"
                              open={deleteModalOpen}
                              setOpen={setDeleteModalOpen}
                              onConfirm={() => onDeleteNote(note)}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="load-more text-center">
                        {isLoading && (
                          <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">
                              <TailwindCircularLoader />
                            </span>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <DelayedOutput delay={5000}>
                      <div className="font-bold max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                        You currently have no notes entered.
                      </div>
                    </DelayedOutput>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddNotesModal;
