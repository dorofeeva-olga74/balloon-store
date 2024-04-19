import HeaderSectionsBottom from '../HeaderSectionsBottom/HeaderSectionsBottom';
import Contacts from '../Contacts/Contacts';
import Hours from '../Hours/Hours';

function HeaderBottom() {
  return (
    <div className='header-bottom'>
      <HeaderSectionsBottom />
      <Contacts />
      <Hours />
    </div>
  );
}
export default HeaderBottom;
