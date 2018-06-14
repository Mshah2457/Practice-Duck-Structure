// Home
import Home from '../Home/PlaceHolder/Home';

// Chat
import Chat from '../Chat/PlaceHolder/Chat';

// Health Assesment
import HealthAssesment from '../HealthAssesment/PlaceHolder/HealthAssesment';

// Physician Store
import SearchPhysician from '../PhysicianStore/containers/SearchPhysician';
import SearchSpecialization from '../PhysicianStore/containers/SearchSpecialization';
import ResultsPhysician from '../PhysicianStore/containers/ResultsPhysician';
import Endorsements from '../PhysicianStore/Endorsements/Endorsements';
import PhysicianDetail from '../PhysicianStore/PhysicianDetail/PhysicianDetail';

// Health Checker
import IntroFeels from '../HealthChecker/Feels/IntroFeels';
import NegativeFeels from '../HealthChecker/Feels/NegativeFeels';
import StoreHCIPermit from '../HealthChecker/StoreHCIPermit/StoreHCIPermit';
import BodyLocations from '../HealthChecker/BodyLocations/BodyLocations';
import BodySubLocations from '../HealthChecker/BodySubLocations/BodySubLocations';
import Symptoms from '../HealthChecker/Symptoms/Symptoms';
import Hurts from '../HealthChecker/Hurts/Hurts';
import SymptomsReview from '../HealthChecker/SymptomsReview/SymptomsReview';
import SpecializationFilter from '../HealthChecker/SpecializationFilter/SpecializationFilter';
import Avatar from '../HealthChecker/SymptomCheckerAvatar/Avatar';

// EMR
import AllergiesEMR from '../ElectronicMedicalRecord/containers/Allergies';
import DiagnosesEMR from '../ElectronicMedicalRecord/containers/Diagnoses';
import ImmunizationsEMR from '../ElectronicMedicalRecord/containers/Immunizations';
import LabsEMR from '../ElectronicMedicalRecord/containers/Labs';
import MedicationsEMR from '../ElectronicMedicalRecord/containers/Medications';
import ProblemsEMR from '../ElectronicMedicalRecord/containers/Problems';
import ProceduresEMR from '../ElectronicMedicalRecord/containers/Procedures';

// Demo
import Demo from '../Demo';
import AgordianEyeDemo from '../AgordianEyeDemo';

export const homeRoutes = {

  //Home
  ViewHome: {
    screen: Home
  }
};

export const chatRoutes = {

  //Chat
  ViewChat: {
    screen: Chat
  }
};

export const healthAssesmentRoutes = {

  //Health Assesment
  ViewHealthAssesment: {
    screen: HealthAssesment
  }
};

export const physicianStoreRoutes = {

  // Physician Store
  ViewSearchPhysician: {
    screen: SearchPhysician
  },
  ViewSearchSpecialization: {
    screen: SearchSpecialization
  },
  ViewResultsPhysician: {
    screen: ResultsPhysician,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  ViewEndorsements: {
    screen: Endorsements
  },
  ViewPhysicianDetail: {
    screen: PhysicianDetail
  }

};

export const healthCheckerRoutes = {

  // Health Checker
  ViewIntroFeels: {
    screen: IntroFeels
  },
  ViewNegativeFeels: {
    screen: NegativeFeels
  },
  ViewHurts: {
    screen: Hurts
  },
  ViewStoreHCIPermits: {
    screen: StoreHCIPermit
  },

  ViewAvatar: {
    screen: Avatar
  },

  ViewBodyLocations: {
    screen: BodyLocations
  },
  ViewBodySubLocations: {
    screen: BodySubLocations
  },
  ViewSymptoms: {
    screen: Symptoms
  },
  ViewSymptomsReview: {
    screen: SymptomsReview
  },
  ViewSpecializationFilter: {
    screen: SpecializationFilter
  }

};

export const emrRoutes = {

  // EMR
  ViewProceduresEMR: {
    screen: ProceduresEMR
  },
  ViewAllergiesEMR: {
    screen: AllergiesEMR
  },
  ViewMedicationsEMR: {
    screen: MedicationsEMR
  },
  ViewLabsEMR: {
    screen: LabsEMR
  },
  ViewImmunizationsEMR: {
    screen: ImmunizationsEMR
  },
  ViewProblemsEMR: {
    screen: ProblemsEMR
  },
  ViewDiagnosesEMR: {
    screen: DiagnosesEMR
  }

};

export const agordianEyeRoutes = {

  ViewAgordianEyeDemo: {
    screen: AgordianEyeDemo
  },
};

export const nonSceneRoutes = {

  // Demo
  ViewDemoScreen: { screen: Demo }

};

export const initialHealthAssesment = "ViewHealthAssesment";
export const initialAgordianEye = "ViewAgordianEyeDemo";
export const initialChat = "ViewChat";
export const initialHome = "ViewHome";
export const initialPhysicianStore = "ViewSearchPhysician";
export const initialEMR = "ViewProceduresEMR";
export const initialHealth = "ViewAvatar";
