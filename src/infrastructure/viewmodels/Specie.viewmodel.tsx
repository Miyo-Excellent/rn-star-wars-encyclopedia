import { SpecieView } from '@views/Specie.view';
import { NavigateProps } from '@components/Navigation';
import { SpecieModel } from '@models/Specie.model';

export interface SpecieViewmodelProps extends NavigateProps {}

export const SpecieViewmodel = ({
  route,
  navigation
}: SpecieViewmodelProps) => {
  const params: any = route.params;
  const data: SpecieModel | undefined = params.data;

  if (!data) {
    navigation.goBack();
    return null;
  }

  return <SpecieView navigation={navigation} data={data} />;
};
