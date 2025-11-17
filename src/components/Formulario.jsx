import { useForm } from "react-hook-form";
const Formulario = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const incluirTelefono=watch('incluirTelefono');
  return (
    <div>
      <h2>Formulario</h2>
      <p>Nombre: {watch("nombre")}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Nombre</label>
          <input
            type="text"
            {...register("nombre", { required: true, maxLength: 10 })}
          />
          {errors.nombre?.type === "required" && (
            <p>El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p>El campo nombre es demasiado largo</p>
          )}
        </div>
        <div>
          <label> Dirección</label>
          <input type="text" {...register("direccion")} />
        </div>
        <div>
          <label> Email</label>
          <input
            type="text"
            {...register("email", {
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>El email introducido no es correcto</p>
          )}
        </div>
        <div>
          <label> Edad</label>
          <input type="text" {...register("edad")} />
        </div>
        <div>
          <label> País</label>
          <select {...register("pais")}>
            <option value="es"> España</option>
            <option value="it"> Italia</option>
            <option value="fr"> Francia</option>
          </select>
          <p>¿Quieres incluir el teléfono?</p>
          <input type="checkbox" {...register("incluirTelefono")} />
          {incluirTelefono && (<div><p>Teléfono</p>
          <input type="text" {...register("telefono")} /> </div>)}
          
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
export default Formulario;
