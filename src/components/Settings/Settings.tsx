import MenuFields from "./Fields/MenuFields";
import useSettings from "./useSettings";

export default function Settings() {
  const { control, register, handleSubmit, formState, getValues, onSubmit } =
    useSettings();
    
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MenuFields {...{ control, register, formState, getValues }} />

        <button type="submit" disabled={!formState.isDirty}>
          submt
        </button>
      </form>
    </div>
  );
}
