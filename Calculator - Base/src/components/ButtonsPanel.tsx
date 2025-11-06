import Button from "./Button";

type ButtonsPanelProps = {
  onClick: (button: string) => void;
};

export default function ButtonsPanel({ onClick }: ButtonsPanelProps) {
  return (
    <div className="panel">
      <Button id="AC" name="AC" onClick={onClick} />
      <Button id="/" name="/" onClick={onClick} />
      <Button id="7" name="7" onClick={onClick} />
      <Button id="8" name="8" onClick={onClick} />
      <Button id="9" name="9" onClick={onClick} />
      <Button id="x" name="x" onClick={onClick} />
      <Button id="4" name="4" onClick={onClick} />
      <Button id="5" name="5" onClick={onClick} />
      <Button id="6" name="6" onClick={onClick} />
      <Button id="-" name="-" onClick={onClick} />
      <Button id="1" name="1" onClick={onClick} />
      <Button id="2" name="2" onClick={onClick} />
      <Button id="3" name="3" onClick={onClick} />
      <Button id="plus" name="+" onClick={onClick} />
      <Button id="0" name="0" onClick={onClick} />
      <Button id="." name="." onClick={onClick} />
      <Button id="equal" name="=" onClick={onClick} />
    </div>
  );
}
