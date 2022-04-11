import { useContext } from "react";
import AppContext from "../../context/context";
import FormInput from "./FormInput";

const FormFile = () => {
    const appContext = useContext(AppContext);
    const {
        currentFile,
        onClickFileHandler,
        types,
        onChangeType,
        attributeInputs,
    } = appContext;

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    {currentFile ? "Editar" : "Agregar nuevo"}
                </h4>

                <div className="form form-vertical">
                    <div className="form-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="first-name-vertical">
                                        Tipo
                                    </label>
                                    <select
                                        name="type_id"
                                        defaultValue={
                                            currentFile
                                                ? currentFile.type_id
                                                : ""
                                        }
                                        className="form-select"
                                        onChange={(e) =>
                                            onChangeType(e.target.value)
                                        }
                                    >
                                        <option value="" disabled>
                                            -- Selecciona un tipo --
                                        </option>
                                        {types.map(({ id, name }) => (
                                            <option key={id} value={id}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="first-name-vertical">
                                        Categoria
                                    </label>
                                    <select
                                        name="type_id"
                                        // defaultValue={value}
                                        className="form-select"
                                    >
                                        {types.map(({ id, name }) => (
                                            <option key={id} value={id}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <FormInput
                                type=""
                                label="Estado"
                                name="status"
                                size="col-6"
                                placeholder=""
                                onChange={console.log}
                                value={currentFile?.status}
                            />
                            {attributeInputs ? (
                                <>
                                    <FormInput
                                        type="text"
                                        label="Nombre"
                                        name="name"
                                        size="col-6"
                                        placeholder="Nombre del archivo"
                                        onChange={console.log}
                                        value={currentFile?.name}
                                    />
                                    {attributeInputs[0].attributes.map(
                                        (attribute) => (
                                            <FormInput
                                                key={`attribute_${attribute.id}`}
                                                type={attribute.type}
                                                label={attribute.label}
                                                name={attribute.name}
                                                size="col-6"
                                                placeholder={attribute.label}
                                                onChange={console.log}
                                                value={
                                                    currentFile?.attributes[
                                                        attribute.name
                                                    ]
                                                }
                                            />
                                        )
                                    )}
                                </>
                            ) : null}

                            {/* <FormInput
                                type="textarea"
                                label="Descripción"
                                name="name"
                                size="col-12"
                                placeholder="Escribe una descripción (opcional)"
                                onChange={console.log}
                                value={currentFile?.description}
                            /> */}

                            <div className="col-12 d-flex justify-content-end">
                                <button
                                    type="submit"
                                    className="btn btn-primary me-1 mb-1"
                                >
                                    {currentFile ? "Actualizar" : "Agregar"}
                                </button>
                                <button
                                    type="reset"
                                    className="btn btn-light-secondary me-1 mb-1"
                                    onClick={() => onClickFileHandler()}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormFile;
