import { CatalogHelper } from '@gooddata/react-components';

import catalogJson from './catalog.json';
const C = new CatalogHelper(catalogJson);

export const PROJECT_ID = catalogJson.projectId;

export default C;
