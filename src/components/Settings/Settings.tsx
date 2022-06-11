import MenuFields from "./Fields/MenuFields";
import useSettings from "./useSettings";

export default function Settings() {
  const { control, register, handleSubmit, formState, onSubmit } =
    useSettings();
    
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MenuFields {...{ control, register, formState }} />

        <button type="submit" disabled={!formState.isDirty}>
          submt
        </button>
      </form>
    </div>
  );
}
