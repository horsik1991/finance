import {deleteAsync} from 'del';
export const clean = () => {
    return deleteAsync(app.path.clean);
}
export const delFiles = () => {
    return deleteAsync(app.path.clean);
  }