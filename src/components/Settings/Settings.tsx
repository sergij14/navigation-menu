import MenuFields from "./Fields/MenuFields";
import {
  SettingsButton,
  SettingsButtons,
  SettingsContainer,
  SettingsForm,
  SettingsHeading,
  SettingsSubHeading,
} from "./Settings.styles";
import useSettings from "./useSettings";

export default function Settings() {
  const {
    control,
    register,
    handleSubmit,
    formState,
    getValues,
    onSubmit,
    setValue,
  } = useSettings();

  return (
    <SettingsContainer>
      <SettingsHeading>Configure Navigation</SettingsHeading>
      <SettingsSubHeading>Merga menu can be configured here</SettingsSubHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SettingsForm>
          <MenuFields
            {...{ control, register, formState, getValues, setValue }}
          />
        </SettingsForm>

        <SettingsButtons>
          <SettingsButton type="submit" disabled={!formState.isDirty}>
            Save
          </SettingsButton>
        </SettingsButtons>
      </form>
    </SettingsContainer>
  );
}
