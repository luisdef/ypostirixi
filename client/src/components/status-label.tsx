
export default function StatusLabel(props: { id: number }) {
  let colorClass, text;

  switch (props.id) {
    case 1:
      colorClass = "open";
      text = "Aberta";
      break;
    case 2:
      colorClass = "service";
      text = "Em serviço";
      break;
    case 3:
      colorClass = "pendent";
      text = "Pendente";
      break;
    case 4:
      colorClass = "end";
      text = "Encerrada";
      break;
  }

  const style = `${colorClass} pt-1 px-3 pb-[2px] rounded-xl flex justify-center items-center w-fit`;
  
  return (
    <div className={style}>
      <div className="text-[14px]">{text}</div>
    </div>
  )
}
