type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
  value?: SelectOption;
};

export function Select({ value, onChange, options }: SelectProps) {
  return <div className="container"></div>;
}
