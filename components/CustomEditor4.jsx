import TipTapEditor from 'components/TipTapEditor';

const CustomEditor = ({ value, setValue, onValueChange = (value) => { }, enableAdvanceEditor = true, placeholder = "", height = 250, className='' }) => {

    return (
        <>
            {enableAdvanceEditor ? (
                <div className='custom-editor-container' >
                    <TipTapEditor
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                            onValueChange(e.target.value);
                        }}
                        style={{ height: height }}
                        className={className}
                    />
                </div>
            ) : (
                <textarea
                    className={`form-control ${className}`}
                    placeholder={placeholder}
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                ></textarea>
            )}
        </>
    );
};

export default CustomEditor;
