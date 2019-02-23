import { createStackNavigator, createAppContainer } from 'react-navigation';
import { CreateEmpPage, FormInscription } from './../screens'

const CreateEmpPageNav = createStackNavigator(
    {
        NewCompte: {
            screen: CreateEmpPage,
        },
        FormInscription: {
            screen: FormInscription,
        },
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false,
        },
    }
)

export default createAppContainer(CreateEmpPageNav);