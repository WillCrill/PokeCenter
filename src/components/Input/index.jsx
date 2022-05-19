import React from "react";

const Input = ({ name, label, type = "text" }) => {
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.

  // Além disso, usaremos um estado local para lidar com o estado da input.

  const onChange = (e) => {
    // Aqui devemos atualizar o estado local do input
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={"Sempre tenho o mesmo valor XD"}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
