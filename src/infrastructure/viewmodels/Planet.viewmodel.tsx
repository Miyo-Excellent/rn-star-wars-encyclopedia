import { PlanetView } from '@views/Planet.view';
import { NavigateProps } from '@components/Navigation';
import { PlanetModel } from '@models/Planet.model';

export interface PlanetViewmodelProps extends NavigateProps {}

export const PlanetViewmodel = ({
  route,
  navigation
}: PlanetViewmodelProps) => {
  const params: any = route.params;
  const data: PlanetModel | undefined = params.data;

  if (!data) {
    navigation.goBack();
    return null;
  }

  return <PlanetView navigation={navigation} data={data} />;
};
