import { Label, Indicator, Input } from "./styled/Checkbox";

export const CheckBox = ({
  todoData,
  handleChange,
  handleEdit,
  editText,
  setEditText,
  isEdit,
}) => {
  const { id, content, complete } = todoData;
  return (
    <Label htmlFor={id}>
      {isEdit ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <input
            required
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          ></input>
        </form>
      ) : (
        <span>{content}</span>
      )}
      <Input
        id={id}
        type="checkbox"
        role="checkbox"
        name={content}
        value={content}
        onChange={handleChange}
        checked={complete}
      />
      <Indicator />
    </Label>
  );
};
