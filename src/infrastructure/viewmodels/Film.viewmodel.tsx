import { FilmView } from '@views/Film.view';
import { NavigateProps } from '@components/Navigation';
import { FilmModel } from '@models/Film.model';

export interface FilmViewmodelProps extends NavigateProps {}

export const FilmViewmodel = ({ route, navigation }: FilmViewmodelProps) => {
  const params: any = route.params;
  const data: FilmModel | undefined = params.data;

  if (!data) {
    navigation.goBack();
    return null;
  }

  return <FilmView navigation={navigation} data={data} />;
};
