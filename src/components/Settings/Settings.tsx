import { useNavigate } from "react-router-dom";
import MenuFields from "./Fields/MenuFields";
import {
  SearchFieldInput,
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
    setSearchTerm,
    searchTerm
  } = useSettings();
  const navigate = useNavigate();

  return (
    <SettingsContainer>
      <SettingsHeading>Configure Navigation</SettingsHeading>
      <SettingsSubHeading>Mega menu can be configured here</SettingsSubHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SettingsForm>
      <SearchFieldInput type="text" placeholder="Search menu item..." value={searchTerm} onChange={({target: {value}}) => setSearchTerm(value)} />
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
