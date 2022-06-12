import { useNavigate } from "react-router-dom";
import MenuFields from "./Fields/MenuFields";
import {
  SettingsButton,
  SettingsButtonDiscard,
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
  const navigate = useNavigate();

  return (
    <SettingsContainer>
      <SettingsHeading>Configure Navigation</SettingsHeading>
      <SettingsSubHeading>Mega menu can be configured here</SettingsSubHeading>
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
          <SettingsButtonDiscard type="button" onClick={() => navigate("/")}>
            Discard
          </SettingsButtonDiscard>
        </SettingsButtons>
      </form>
    </SettingsContainer>
  );
}
