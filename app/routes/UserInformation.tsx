
import NavLogin from '~/Web_components/NavLogin';

export default function UserInformation() {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '34567890',
      };
    
      return (
        <>
        <NavLogin/>
        <h1 className="text-2xl font-bold mb-8 text-center mt-25">帳戶資料</h1>
        <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
          <div>
            <p><strong>帳戶名稱:</strong> {user.name}</p>
            <p><strong>電郵:</strong> {user.email}</p>
            <p><strong>電話號碼:</strong> {user.phone}</p>
          </div>
        </div>
        </>
      );
};
