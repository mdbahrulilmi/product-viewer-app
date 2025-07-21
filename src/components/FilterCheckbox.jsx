export default function FilterCheckbox({ category, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer my-1">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="capitalize">{category}</span>
    </label>
  );
}
