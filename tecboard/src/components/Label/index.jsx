import "./styles.css";

export function Label(props) {
  const { children } = props;
  return (
    <label className="campo-label" {...props}>
      {children}
    </label>
  );
}
