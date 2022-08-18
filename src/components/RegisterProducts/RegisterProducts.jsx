import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/API";
import "../RegisterProducts/RegisterProducts.scss";

const RegisterProducts = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.img[0]);

    let fd = new FormData();

    fd.append("tipo", data.tipo);
    fd.append("marca", data.marca);
    fd.append("modelo", data.modelo);
    fd.append("fecha", data.fecha);
    fd.append("estado", data.estado);
    fd.append("precio", data.precio);
    fd.append("img", data.img[0]);
    fd.append("cp", data.cp);

    try {
      API.post("/products", fd).then((response) => {
        console.log(response);
        alert("Publicado exitosamente!");
      });
    } catch (error) {
      console.log("error", error);
      alert("Error al publicar!");
    }
  };

  return (
    <form className="content-form-products" onSubmit={handleSubmit(onSubmit)}>

          <div className="content-products">
            <label className="label">Tipo</label>
            <input
              className="input"
              id="tipo"
              type="text"
              name="tipo"
              {...register("tipo")}
            />
            <label className="label">Marca</label>
            <input
              className="input"
              id="marca"
              type="text"
              name="marca"
              {...register("marca")}
            />
            <label className="label">Modelo</label>
            <input
              className="input"
              id="modelo"
              type="text"
              name="modelo"
              {...register("modelo")}
            />
            <label className="label">Fecha</label>
            <input
              className="input"
              id="fecha"
              type="text"
              name="fecha"
              {...register("fecha")}
            />
            <label className="label">Estado</label>
            <input
              className="input"
              id="estado"
              type="text"
              name="estado"
              {...register("estado")}
            />
            <label className="label">Código Postal</label>
            <input
              className="input"
              id="cp"
              type="text"
              name="cp"
              {...register("cp")}
            />
            <label className="label">Precio</label>
            <input
              className="input"
              id="precio"
              type="text"
              name="precio"
              {...register("precio")}
            />
            <label className="label">Imagen</label>
            <input
              className="input"
              id="img"
              type="file"
              name="img"
              {...register("img")}
            />
          </div>
            <button className="btn-register-products">Publicar</button>
    </form>
  );
};

export default RegisterProducts;
