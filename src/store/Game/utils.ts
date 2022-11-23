import {ERoute} from '../../types/route';
import {REVERT_ROUTE_PATH} from '../../constants/routes';

export const getPathToRoute = (path: string = ''): ERoute => {
	return REVERT_ROUTE_PATH[`/${path.split('/')[1]}`];
};
