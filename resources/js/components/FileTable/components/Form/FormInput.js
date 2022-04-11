const FormInput = ({
    label,
    name,
    size,
    placeholder,
    onChange,
    type,
    value,
}) => {
    return (
        <div className={size}>
            <div className="form-group">
                <label htmlFor="first-name-vertical">{label}</label>
                {type === "text" ? (
                    <input
                        type="text"
                        className="form-control"
                        name={name}
                        placeholder={placeholder}
                        onChange={(e) => onChange(e)}
                        value={value}
                    />
                ) : type === "textarea" ? (
                    <textarea
                        className="form-control"
                        placeholder={placeholder}
                        onChange={(e) => onChange(e)}
                    >
                        {value}
                    </textarea>
                ) : (
                    <select
                        name={name}
                        defaultValue={value}
                        className="form-select"
                    >
                        <option value="activo">Activo</option>
                        <option value="borrador">Borrador</option>
                        <option value="privado">Privado</option>
                    </select>
                )}
            </div>
        </div>
    );
};

export default FormInput;
