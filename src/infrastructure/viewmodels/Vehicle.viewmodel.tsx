import { VehicleView } from '@views/Vehicle.view';
import { NavigateProps } from '@components/Navigation';
import { VehicleModel } from '@models/Vehicle.model';

export interface VehicleViewmodelProps extends NavigateProps {}

export const VehicleViewmodel = ({
  route,
  navigation
}: VehicleViewmodelProps) => {
  const params: any = route.params;
  const data: VehicleModel | undefined = params.data;

  if (!data) {
    navigation.goBack();
    return null;
  }

  return <VehicleView navigation={navigation} data={data} />;
};
