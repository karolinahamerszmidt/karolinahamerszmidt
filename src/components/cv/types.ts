export interface CvDataPerson {
  readonly avatarImg: string;
  readonly fullName: string;
  readonly dateOfBirth: string;
  readonly nationality: string;
  readonly phoneNumber: string | null;
  readonly phoneNumber2: string | null;
  readonly email: string;
  readonly github: string | null;
  readonly website: string;
  readonly linkedIn: string;
  readonly address1Line1: string;
  readonly address1Line2: string;
  readonly address2Line1: string | null;
  readonly address2Line2: string | null;
  readonly address3Line1: string | null;
  readonly address3Line2: string | null;
}

export interface CvJob {
  readonly dateStarted: string;
  readonly dateFinished: string;
  readonly position: string;
  readonly company: string;
  readonly location: string;
  readonly description: readonly string[];
  readonly buzzwords: readonly string[];
}

export interface CvSkillLanguage {
  readonly level: string;
  readonly name: string;
}

export interface CvEducation {
  readonly dateFinished: string;
  readonly dateStarted: string;
  readonly faculty: string;
  readonly fieldOfStudy: string;
  readonly university: string;
}

export interface CvSocialActivity {
  readonly activity: string;
  readonly dateFinished: string;
  readonly dateStarted: string;
  readonly organization: string;
}

export interface CvSkill {
  readonly iAm: readonly string[];
  readonly iLove: readonly string[];
  readonly languages: readonly CvSkillLanguage[];
  readonly other: readonly string[];
}

export interface CvData {
  readonly qrCodeValue: string;
  readonly person: CvDataPerson;
  readonly jobs: readonly CvJob[];
  readonly skills: CvSkill;
  readonly education: readonly CvEducation[];
  readonly socialActivities: readonly CvSocialActivity[];
  readonly clause: string;
}
