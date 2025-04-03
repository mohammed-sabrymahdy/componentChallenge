import Button from "./Button";

export default function Side() {
  return (
    <aside
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        width: "40%",
        margin: "10px 0",
        border: "solid 2px teal",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </aside>
  );
}
