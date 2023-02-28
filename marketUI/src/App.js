
import './App.css';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Services from './Services';
import Login from './Login';
import Signup from './Signup';
import StudentHome from './component/student/studentHome';
import StudentShopping from './component/student/studentShopping';
import StudentCart from './component/student/studentCart';
import StudentProduct from './component/student/studentProduct';
import StudentCheckout from './component/student/studentCheckout';
import StudentClub from './component/student/studentClub';
import StudentManageProduct from './component/student/studentManageProduct';
import StudentAddProduct from './component/student/studentAddProduct';
import StudentRemoveProduct from './component/student/studentRemoveProduct';
import StudentPost from './component/student/studentPost';
import StudentChat from './component/student/studentChat';
import StudentAdvertisement from './component/student/studentAdvertisement';
import BusinessManageProduct from './component/business/businessManageProduct';
import BusinessHome from './component/business/businessHome';
import BusinessManageAdvertisement from './component/business/businessManageAdvertisement';
import BusinessAddProduct from './component/business/businessAddProduct';
import BusinessRemoveProduct from './component/business/businessRemoveProduct';
import BusinessManageBusiness from './component/business/businessManageBusiness';
import BusinessChat from './component/business/businessChat';
import BusinessAddAdvertisement from './component/business/businessAddAdvertisement';
import BusinessRemoveAdvertisement from './component/business/businessRemoveAdvertisement';
import SchoolAdminHome from './component/schooladmin/schoolAdminHome';
import SchoolAdminManageBusiness from './component/schooladmin/schoolAdminManageBusiness';
import SchoolAdminManageStudent from './component/schooladmin/schoolAdminManageStudent';
import SchoolAdminManageClub from './component/schooladmin/schoolAdminManageClub';
import SchoolAdminManagePost from './component/schooladmin/schoolAdminManagePost';
import SchoolAdminViewReport from './component/schooladmin/schoolAdminViewReport';
import SuperAdminHome from './component/superadmin/superAdminHome';
import SuperAdminManageBusiness from './component/superadmin/superAdminManageBusiness';
import SuperAdminManageSchoolAdmin from './component/superadmin/superAdminManageSchoolAdmin';
import SuperAdminManageStudent from './component/superadmin/superAdminManageStudent';
import SuperAdminManageClub from './component/superadmin/superAdminManageClub';
import SuperAdminManagePost from './component/superadmin/superAdminManagePost';
import SuperAdminViewReport from './component/superadmin/superAdminViewReport';


import { BrowserRouter as Router, Switch , Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} ></Route>  
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/contactus' element={<ContactUs/>} ></Route>
      <Route path='/services' element={<Services/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/signup' element={<Signup/>} ></Route>
      <Route path='/studenthome' element={<StudentHome/>} ></Route>
      <Route path='/studentshopping' element={<StudentShopping/>} ></Route>
      <Route path='/studentcart' element={<StudentCart/>} ></Route>
      <Route path='/studentcheckout' element={<StudentCheckout/>} ></Route>
      <Route path='/studentproduct' element={<StudentProduct/>} ></Route>
      <Route path='/studentclub' element={<StudentClub/>} ></Route>
      <Route path='/studentmanageproduct' element={<StudentManageProduct/>} ></Route>
      <Route path='/studentaddproduct' element={<StudentAddProduct/>} ></Route>
      <Route path='/studentremoveproduct' element={<StudentRemoveProduct/>} ></Route>
      <Route path='/studentpost' element={<StudentPost/>} ></Route>
      <Route path='/studentchat' element={<StudentChat/>} ></Route>
      <Route path='/studentadvertisement' element={<StudentAdvertisement/>} ></Route>
      <Route path='/businesshome' element={<BusinessHome/>} ></Route>
      <Route path='/businessmanageproduct' element={<BusinessManageProduct/>} ></Route>
      <Route path='/businessaddproduct' element={<BusinessAddProduct/>} ></Route>
      <Route path='/businessremoveproduct' element={<BusinessRemoveProduct/>} ></Route>
      <Route path='/businessmanageadvertisement' element={<BusinessManageAdvertisement/>} ></Route>
      <Route path='/businessaddadvertisement' element={<BusinessAddAdvertisement/>} ></Route>
      <Route path='/businessremoveadvertisement' element={<BusinessRemoveAdvertisement/>} ></Route>
      <Route path='/businesschat' element={<BusinessChat/>} ></Route>
      <Route path='/businessmanagebusiness' element={<BusinessManageBusiness/>} ></Route>
      <Route path='/schooladminhome' element={<SchoolAdminHome/>} ></Route>
      <Route path='/schooladminmanagebusiness' element={<SchoolAdminManageBusiness/>} ></Route>
      <Route path='/schooladminmanagepost' element={<SchoolAdminManagePost/>} ></Route>
      <Route path='/schooladminmanageclub' element={<SchoolAdminManageClub/>} ></Route>
      <Route path='/schooladminmanagestudent' element={<SchoolAdminManageStudent/>} ></Route>
      <Route path='/schooladminviewreport' element={<SchoolAdminViewReport/>} ></Route>
      <Route path='/superadminhome' element={<SuperAdminHome/>} ></Route>
      <Route path='/superadminmanagebusiness' element={<SuperAdminManageBusiness/>} ></Route>
      <Route path='/superadminmanagepost' element={<SuperAdminManagePost/>} ></Route>
      <Route path='/superadminmanageclub' element={<SuperAdminManageClub/>} ></Route>
      <Route path='/superadminmanagestudent' element={<SuperAdminManageStudent/>} ></Route>
      <Route path='/superadminviewreport' element={<SuperAdminViewReport/>} ></Route>
      <Route path='/superadminmanageschooladmin' element={<SuperAdminManageSchoolAdmin/>} ></Route>

      </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
