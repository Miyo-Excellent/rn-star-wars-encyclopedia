import { StarshipView } from '@views/Starship.view';
import { NavigateProps } from '@components/Navigation';
import { StarshipModel } from '@models/Starship.model';

export interface StarshipViewmodelProps extends NavigateProps {}

export const StarshipViewmodel = ({
  route,
  navigation
}: StarshipViewmodelProps) => {
  const params: any = route.params;
  const data: StarshipModel | undefined = params.data;

  if (!data) {
    navigation.goBack();
    return null;
  }

  return <StarshipView navigation={navigation} data={data} />;
};
