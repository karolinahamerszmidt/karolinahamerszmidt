/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/no-multi-comp */
import type { VFC } from 'react';
import React, { useContext } from 'react';

import './index.scss';
import type { CvData } from '../cv';
import { CV } from '../cv';
import { Locale, LocaleContext, LocaleProvider } from '../locale-provider';

import avatar from './avatar.jpg';

const cvDataEn: CvData = {
  clause:
    'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the Personal Data Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2016, item 922 as amended.',
  education: [
    {
      dateFinished: '2017',
      dateStarted: '2013',
      faculty: 'Faculty of Political Science and International Studies',
      fieldOfStudy: "International Relations: East-Asian Studies (Master's degree)",
      university: 'University of Warsaw, Poland',
    },
    {
      dateFinished: '2016',
      dateStarted: '2011',
      faculty: 'Faculty of Applied Linguistics',
      fieldOfStudy: "Eastern Slavic Studies: Cultural Studies of Central and Eastern Europe (Bachelor's degree)",
      university: 'University of Warsaw, Poland',
    },
    {
      dateFinished: '2013',
      dateStarted: '2011',
      faculty: 'Faculty of Law and Administration',
      fieldOfStudy: "International Relations (Bachelor's degree)",
      university: 'University of Cardinal Stefan Wyszyński, Poland',
    },
    {
      dateFinished: '2011',
      dateStarted: '2009',
      faculty: 'Faculty of Modern Languages',
      fieldOfStudy: 'German Studies (Not finished)',
      university: 'University of Warsaw, Poland',
    },
  ],
  jobs: [
    {
      buzzwords: ['Vue.js', 'JavaScript', 'CSS', 'HTML', 'e2e testing', 'unit testing', 'GitLab CI/CD', 'AWS'],
      company: 'OMRT',
      dateFinished: 'present',
      dateStarted: '2021',
      description: [],
      location: 'Amsterdam, THE NETHERLANDS',
      position: 'Frontend Developer',
    },
    {
      buzzwords: [],
      company: 'Side-projects',
      dateFinished: '2020',
      dateStarted: '',
      description: [
        `My GitHub profile: https://github.com/karolinahamerszmidt
        
        Sales dashboard: https://sales-dashboard.hamerszmidt.eu
        https://github.com/karolinahamerszmidt/sales-dashboard
        Tech: React, Typescript, Styled Components
        
        GoodsRent: https://goodsrent.com
        Tech: React, Next.js, Node.js, Typescript
        
        Mashcrisp: https://mashcrisp.com
        https://github.com/karolinahamerszmidt/karolina-blog
        Tech: React, Netlify
        
        Mangaido: https://mangaido.com
        https://web.archive.org/web/20201205185941/https://mangaido.com/en
        Video about Mangaido from 2017 https://www.youtube.com/watch?v=livg6nY65nU
        Tech: React, Ruby
        
        I did a series of LinkedIn assessments and acquired skill badges for: React, JavaScript, Frontend Development, Git, CSS, Agile Methodology`,
      ],
      location: 'Rotterdam, THE NETHERLANDS',
      position: 'Frontend Developer',
    },
    {
      buzzwords: [],
      company: 'Finabel - European Army Interoperability Centre',
      dateFinished: '',
      dateStarted: '2020',
      description: [
        'Organize and oversee all social media platforms',
        'Creation of marketing and communication tools',
        'WordPress website management',
      ],
      location: 'Brussels, BELGIUM',
      position: 'The Communications Intern',
    },
    {
      buzzwords: [],
      company: 'ECIT (European Citizens, Involvement, Trust)',
      dateFinished: '',
      dateStarted: '2020',
      description: [
        `Launch and campaign for "Voters Without Borders"`,
        'Mapping of potential partners in Poland',
        'Supporting the communication strategy',
        'Management of social media and website',
      ],
      location: 'Brussels, BELGIUM',
      position: 'Volunteer',
    },
    {
      buzzwords: [],
      company: 'Permanent Representation of Poland to the EU',
      dateFinished: '',
      dateStarted: '2020',
      description: [
        'Working at Department of Regional and Cohesion Policy',
        'Preparing materials from European Council and European Parliament meetings',
      ],
      location: 'Brussels, BELGIUM',
      position: 'Volunteer',
    },
    {
      buzzwords: ['JavaScript', 'HTML', 'CSS', 'CMS', 'Instagram', 'Facebook', 'Spreadsheets', 'Graphic design tools'],
      company: 'Interreg Volunteer Youth EU: Interreg V-A Poland-Slovakia Programme 2014-2020',
      dateFinished: '',
      dateStarted: '2019',
      description: [
        'managing social media channels',
        'creating content for web',
        'organising events',
        'creating audio-visual materials',
      ],
      location: 'Cracow, POLAND',
      position: 'Volunteer',
    },
    {
      buzzwords: ['JavaScript', 'HTML', 'CSS', 'CMS', 'Joomla'],
      company: 'Polish Tourism Organisation',
      dateFinished: '',
      dateStarted: '2019',
      description: [
        'preparing study press & promo materials',
        'Polish/English translations',
        'managing content on various websites',
      ],
      location: 'Brussels, BELGIUM',
      position: 'Trainee',
    },
    {
      buzzwords: [
        'JavaScript',
        'React',
        'HTML',
        'CSS',
        'Google Analytics',
        'Taiga.io (project managment tool)',
        'Wropress',
        'phpMyAdmin',
        'Adobe Lightroom',
      ],
      company: 'Mangaido.com',
      dateFinished: '2019',
      dateStarted: '2018',
      description: [
        'creating & maintaining content on daily basis',
        'preparing and prioritizing tasks for development team',
        'organizing and animating SCRUM meetings',
        'querying & amending data directly in database',
        'tracking KPIs',
        'recruiting artists',
      ],
      location: 'Hamburg, GERMANY',
      position: 'Content Manager',
    },
    {
      buzzwords: ['JavaScript', 'HTML', 'CSS', 'Drupal', 'Facebook', 'Instagram', 'Twitter'],
      company: "Polish Press Agency (PAP), 'TheFirstNews' - Polish news in English",
      dateFinished: '',
      dateStarted: '2018',
      description: [
        'maintaining project backlog',
        'managing content on www.thefirstnews.com website',
        'publishing news and events via CMS',
        'taking care of Facebook fanpage of TheFirstNews',
        'preparing social networks campaign strategies',
        'gaining news sources among Polish foreign institutions',
        'making contact with other news websites',
        'researching material for various articles',
      ],
      location: 'Warsaw, POLAND',
      position: 'Content Manager',
    },
    {
      buzzwords: ['Outlook', 'Invoice Management System'],
      company: 'ILF Consulting Engineers Polska Sp. z o.o.',
      dateFinished: '2018',
      dateStarted: '2017',
      description: [
        'greeting, informing, and directing visitors and employees',
        'managing incoming and outgoing correspondence',
        'handling incoming and outgoing phone calls',
        'coordinating meeting rooms',
        'scheduling calendar',
        'filing invoices',
        'coordinating the supply of office materials',
        'booking tickets, hotels',
      ],
      location: 'Warsaw, POLAND',
      position: 'Receptionist',
    },
    {
      buzzwords: ['WF-Mag', 'Shopify', 'Excel'],
      company: 'Rhetos',
      dateFinished: '',
      dateStarted: '2017',
      description: [
        'issuing receipts, invoices and other documents',
        'receiving and fulfilling orders',
        'managing on-line store',
        'making daily and monthly reports',
        'managing incoming and outgoing correspondence and phone calls',
      ],
      location: 'Warsaw, POLAND',
      position: 'Office Worker',
    },
    {
      buzzwords: ['JavaScript', 'React', 'HTML', 'CSS', 'Google AdSense', 'Excel'],
      company: 'Mangaido.com',
      dateFinished: '2017',
      dateStarted: '2014',
      description: [
        'keeping contact with Japanese publishers',
        'coordinating and supporting development team',
        "organizing company's participation in Tokyo fairs",
        'taking care of organizing business travels',
        'office administration',
      ],
      location: 'Warsaw, POLAND',
      position: 'Co Founder',
    },
    {
      buzzwords: ['JavaScript', 'HTML', 'CSS', 'Google Analytics', 'Google AdSense', 'Wordpress', 'Custom PHP CMS'],
      company: 'FullDive.jp',
      dateFinished: '2015',
      dateStarted: '2012',
      description: [
        'orchestrating all ongoing development projects',
        'managing on-line book store',
        'coordinating translations',
        'contact with publishers',
        'communication with users, translators and authors',
        'taking care of Google Adsense and Google Analytycs accounts',
      ],
      location: 'Warsaw, POLAND',
      position: 'Co Founder',
    },
    {
      buzzwords: [],
      company: 'Narodowy Instytut Audiowizualny',
      dateFinished: '',
      dateStarted: '2012',
      description: ['verification of audiovisual materials', 'helping production department team'],
      location: 'Warsaw, POLAND',
      position: 'Trainee',
    },
    {
      buzzwords: [],
      company: 'Polskie Radio S.A.',
      dateFinished: '',
      dateStarted: '2011',
      description: ['managing incoming and outgoing correspondence and phone calls', 'perform administrative tasks'],
      location: 'Warsaw, POLAND',
      position: 'Secretary',
    },
    {
      buzzwords: [],
      company: 'Netia S.A.',
      dateFinished: '',
      dateStarted: '2011',
      description: [],
      location: 'Warsaw, POLAND',
      position: 'Phone Consultant',
    },
    {
      buzzwords: [],
      company: 'Polskie Radio S.A.',
      dateFinished: '',
      dateStarted: '2011',
      description: [],
      location: 'Warsaw, POLAND',
      position: 'Trainee',
    },
    {
      buzzwords: [],
      company: 'Teatr Wielki - Polish National Opera',
      dateFinished: '',
      dateStarted: '2009',
      description: [],
      location: 'Warsaw, POLAND',
      position: 'Volunteer',
    },
  ],
  person: {
    address1Line1: 'Galvanistraat 707 / 13',
    address1Line2: '3029AD Rotterdam, The Netherlands',
    address2Line1: null,
    address2Line2: null,
    address3Line1: null,
    address3Line2: null,
    avatarImg: avatar,
    dateOfBirth: '12 Sep 1990',
    email: 'karolina@hamerszmidt.eu',
    fullName: 'Karolina Hamerszmidt',
    github: 'karolinahamerszmidt',
    linkedIn: 'karolina-hamerszmidt-9b018a1b0',
    nationality: 'Polish',
    phoneNumber: '(+31) 627-911-647',
    phoneNumber2: '(+48) 503-630-601',
    website: 'karolina.hamerszmidt.eu',
  },
  qrCodeValue: 'https://karolina.hamerszmidt.eu',
  skills: {
    iAm: ['Creative', 'Innovative', 'Cooperative', 'Flexible', 'Hardworking', 'Optimistic'],
    iLove: ['Yoga & Pilates', 'Lifestyle medicine', 'Cooking'],
    languages: [
      {
        level: 'mother language',
        name: 'Polish',
      },
      {
        level: 'fluent',
        name: 'English',
      },
      {
        level: 'good command (B2)',
        name: 'German',
      },
      {
        level: 'good command (B2)',
        name: 'Lithuanian',
      },
      {
        level: 'currently learning (A2)',
        name: 'French',
      },
      {
        level: 'basic skills',
        name: 'Japanese',
      },
    ],
    other: [],
  },
  socialActivities: [
    {
      activity: 'Participating in European Week of Regions & Cities',
      dateFinished: '',
      dateStarted: 'October 2019',
      organization: 'Interreg Volunteer Youth',
    },
    {
      activity: 'Co Organizer of Neonalia event',
      dateFinished: '',
      dateStarted: 'May 2011',
      organization: 'University of Warsaw',
    },
    {
      activity: 'Co Organizer of Połowinki event',
      dateFinished: '',
      dateStarted: 'Mar 2011',
      organization: 'University of Warsaw',
    },
    {
      activity: 'Student Council President',
      dateFinished: '2011',
      dateStarted: '2010',
      organization: 'German Studies - University of Warsaw',
    },
    {
      activity: "Member of Student's Parliament",
      dateFinished: '2011',
      dateStarted: '2010',
      organization: 'University of Warsaw',
    },
    {
      activity: "Member of Student's Council",
      dateFinished: '2010',
      dateStarted: '2009',
      organization: 'German Studies - University of Warsaw',
    },
    {
      activity: 'Volunteer',
      dateFinished: '',
      dateStarted: 'Jan 2009',
      organization: 'XIV Great Orchestra of Christmas Aid',
    },
  ],
};

const cvDataPl: CvData = {
  clause:
    'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.',
  education: [
    {
      dateFinished: '2017',
      dateStarted: '2013',
      faculty: 'Wydział Nauk Politycznych i Studiów Międzynarodowych',
      fieldOfStudy: 'Stosunki międzynarodowe, specjalność wschodnioazjatycka (Magister)',
      university: 'Uniwersytet Warszawski, Polska',
    },
    {
      dateFinished: '2016',
      dateStarted: '2011',
      faculty: 'Wydział Lingwistyki Stosowanej',
      fieldOfStudy:
        'Studia nad słowiańszczyzną wschodnią, specjalność: kulturoznawstwo Europy Środkowo-Wschodniej (Licencjat)',
      university: 'Uniwersytet Warszawski, Polska',
    },
    {
      dateFinished: '2013',
      dateStarted: '2011',
      faculty: 'Wydział Prawa i Administracji',
      fieldOfStudy: 'Stosunki międzynarodowe (Licencjat)',
      university: 'Uniwersytet Kardynała Stefana Wyszyńskiego, Polska',
    },
    {
      dateFinished: '2011',
      dateStarted: '2009',
      faculty: 'Wydział Neofilologii',
      fieldOfStudy: 'Germanistyka (Przerwane)',
      university: 'Uniwersytet Warszawski, Polska',
    },
  ],
  jobs: [
    {
      buzzwords: ['Vue.js', 'JavaScript', 'CSS', 'HTML', 'e2e testing', 'unit testing', 'GitLab CI/CD', 'AWS'],
      company: 'OMRT',
      dateFinished: 'obecnie',
      dateStarted: '2021',
      description: [],
      location: 'Amsterdam, HOLANDIA',
      position: 'Frontend Developer',
    },
    {
      buzzwords: [],
      company: 'Side-projekty',
      dateFinished: '2020',
      dateStarted: '',
      description: [
        `Mój profil na GitHub: https://github.com/karolinahamerszmidt
        
        Sales dashboard: https://sales-dashboard.hamerszmidt.eu
        https://github.com/karolinahamerszmidt/sales-dashboard
        Tech: React, Typescript, Styled Components
        
        GoodsRent: https://goodsrent.com
        Tech: React, Next.js, Node.js, Typescript
        
        Mashcrisp: https://mashcrisp.com
        https://github.com/karolinahamerszmidt/karolina-blog
        Tech: React, Netlify
        
        Mangaido: https://mangaido.com
        https://web.archive.org/web/20201205185941/https://mangaido.com/en
        Video o Mangaido z 2017 https://www.youtube.com/watch?v=livg6nY65nU
        Tech: React, Ruby
        
        Zrobiłem serię assesmentów na LinkedIn i posiadam następujące certyfikaty umiejętności: React, JavaScript, Frontend Development, Git, CSS, Metodologia Agile`,
      ],
      location: 'Rotterdam, HOLANDIA',
      position: 'Frontend Developer',
    },
    {
      buzzwords: [],
      company: 'Finabel - European Army Interoperability Centre',
      dateFinished: '',
      dateStarted: '2020',
      description: ['planowanie i tworzenie treści w mediach społecznościowych', 'zarządzanie stroną internetową'],
      location: 'Bruksela, BELGIA',
      position: 'Stażysta',
    },
    {
      buzzwords: [],
      company: 'ECIT (European Citizens, Involvement, Trust)',
      dateFinished: '',
      dateStarted: '2020',
      description: [
        'planowanie i tworzenie treści w mediach społecznościowych',
        'zarządzanie stroną internetową',
        'wykonywanie tłumaczeń pisemnych',
      ],
      location: 'Bruksela, BELGIA',
      position: 'Stażysta',
    },
    {
      buzzwords: [],
      company: 'Stałe Przedstawicielstwo Rzeczypospolitej Polskiej przy UE',
      dateFinished: '',
      dateStarted: '2020',
      description: ['udział w posiedzeniach Coreperu', 'sporządzanie pism, notatek, sprawozdań, raportów'],
      location: 'Bruksela, BELGIA',
      position: 'Stażysta',
    },
    {
      buzzwords: ['CMS', 'Instagram', 'Facebook', 'Spreadsheets', 'Graphic design tools'],
      company: 'Interreg Volunteer Youth EU: Interreg Polska-Słowacja 2014-2020',
      dateFinished: '',
      dateStarted: '2019',
      description: [
        'zarządzanie stroną internetową',
        'planowanie i tworzenie treści w mediach społecznościowych',
        'pomoc w organizacji eventów',
      ],
      location: 'Kraków, POLSKA',
      position: 'Stażysta',
    },
    {
      buzzwords: ['CMS', 'Joomla'],
      company: 'Polska Organizacja Turystyczna',
      dateFinished: '',
      dateStarted: '2019',
      description: [
        'tworzenie materiałów promocyjnych',
        'zarządzanie stroną internetową',
        'wykonywanie tłumaczeń pisemnych',
      ],
      location: 'Bruksela, BELGIA',
      position: 'Stażysta',
    },
    {
      buzzwords: ['Google Analytics', 'Taiga.io', 'Wordpress', 'phpMyAdmin', 'Adobe Lightroom'],
      company: 'Mangaido.com',
      dateFinished: '2019',
      dateStarted: '2018',
      description: [
        'tworzenie i zarządzanie treścią stron internetowych',
        'wyszukiwanie i edycja bezpośrednio w bazie danych',
        'mierzenie i raportowanie KPI',
        'rekrutacja artystów',
        'wsparcie użytkowników stron internetowych',
        'przetwarzanie i edycja grafiki cyfrowej',
      ],
      location: 'Hamburg, NIEMCY',
      position: 'Content Manager',
    },
    {
      buzzwords: ['Drupal', 'Facebook', 'Instagram', 'Twitter'],
      company: 'Polska Agencja Prasowa (PAP), TheFirstNews.com',
      dateFinished: '',
      dateStarted: '2018',
      description: [
        'zarządanie treściami na thefirstnews.com',
        'publikowanie wiadomości i wydarzeń przez system CMS',
        "zarządzanie oficjalnym fanpage'em na Facebook",
        'przygotowywanie strategii marketingowych w social media',
        'wyszukiwanie wydarzeń kulturalnych w Polsce',
        'pozyskiwanie kontaktów w Polskich placówkach zagranicznych',
        'utrzymywanie kontaktu z innymi news portalami',
        'wyszukiwanie materiałów do artykułów',
      ],
      location: 'Warszawa, POLSKA',
      position: 'Content Manager',
    },
    {
      buzzwords: ['Outlook', 'Invoice Management System'],
      company: 'ILF Consulting Engineers Polska Sp. z o.o.',
      dateFinished: '2018',
      dateStarted: '2017',
      description: [
        'obsługa gości i pracowników',
        'zarządzanie pocztą przychodzącą i wychodzącą',
        'obsługa przychodzących i wychodzących połączeń telefonicznych',
        'koordynacja sal konferencyjnych',
        'zarządzanie kalendarzem ogólnofirmowym',
        'wypełnianie i wprowadzanie faktur do systemu',
        'koordynacja zaopatrzenia materiałów biurowych',
        'rezerwowanie biletów i hoteli',
      ],
      location: 'Warszawa, POLSKA',
      position: 'Recepcjonistka',
    },
    {
      buzzwords: ['WF-Mag', 'Shopify', 'Excel'],
      company: 'Rhetos',
      dateFinished: '',
      dateStarted: '2017',
      description: [
        'wydawanie rachunków, faktur i innych dokumentów',
        'odbiór i wysyłka zamówień',
        'zarządzanie sklepem internetowym',
        'przygotowywanie dziennych i miesięcznych raportów',
        'obsługa przychodzącej i wychodzącej korespondencji i telefonów',
      ],
      location: 'Warszawa, POLSKA',
      position: 'Pracownik Biurowy',
    },
    {
      buzzwords: ['Google AdSense', 'Excel'],
      company: 'Mangaido.com',
      dateFinished: '2017',
      dateStarted: '2014',
      description: [
        'utrzymywanie kontaktów biznesowych z Japońskimi wydawnictwami',
        'organizacja firmowego udziału na targach w Tokio w Japonii',
        'obsługa podróży biznesowych',
        'zarządzanie i administracja biurem',
      ],
      location: 'Warszawa, POLSKA',
      position: 'Współzałożyciel',
    },
    {
      buzzwords: ['Google Analytics', 'Google AdSense', 'Wordpress', 'Custom PHP CMS'],
      company: 'FullDive.jp',
      dateFinished: '2015',
      dateStarted: '2012',
      description: [
        "zarządzanie CMS'em",
        'obsługa internetowego sklepu z książkami',
        'zarządzanie tłumaczeniami tytułów',
        'utrzymywanie kontaktów z wydawnictwami',
        'obsługa użytkowników, tłumaczy i autorów',
        'zarządzanie kontami Google Analytics i Google AdSense',
      ],
      location: 'Warszawa, POLSKA',
      position: 'Współzałożyciel',
    },
    {
      buzzwords: [],
      company: 'Narodowy Instytut Audiowizualny',
      dateFinished: '',
      dateStarted: '2012',
      description: ['weryfikacja materiałów audiowizualnych', 'bieżąca pomoc wydziałowi produkcji'],
      location: 'Warszawa, POLSKA',
      position: 'Stażysta',
    },
    {
      buzzwords: [],
      company: 'Polskie Radio S.A.',
      dateFinished: '',
      dateStarted: '2011',
      description: ['obsługa przychodzącej i wychodzącej korespondencji i telefonów', 'prace administracyjno-biurowe'],
      location: 'Warszawa, POLSKA',
      position: 'Sekretarka',
    },
    {
      buzzwords: [],
      company: 'Netia S.A.',
      dateFinished: '',
      dateStarted: '2011',
      description: [],
      location: 'Warszawa, POLSKA',
      position: 'Konsultant Telefoniczny',
    },
    {
      buzzwords: [],
      company: 'Polskie Radio S.A.',
      dateFinished: '',
      dateStarted: '2011',
      description: [],
      location: 'Warszawa, POLSKA',
      position: 'Stażysta',
    },
    {
      buzzwords: [],
      company: 'Teatr Wielki - Polska Opera Narodowa',
      dateFinished: '',
      dateStarted: '2009',
      description: [],
      location: 'Warszawa, POLSKA',
      position: 'Wolontariusz',
    },
  ],
  person: {
    address1Line1: 'Galvanistraat 707 / 13',
    address1Line2: '3029AD Rotterdam, Holandia',
    address2Line1: null,
    address2Line2: null,
    address3Line1: null,
    address3Line2: null,
    avatarImg: avatar,
    dateOfBirth: '12 września 1990',
    email: 'karolina@hamerszmidt.eu',
    fullName: 'Karolina Hamerszmidt',
    github: 'karolinahamerszmidt',
    linkedIn: 'karolina-hamerszmidt-9b018a1b0',
    nationality: 'Polskie',
    phoneNumber: '(+48) 503-630-601',
    phoneNumber2: '(+31) 627-911-647',
    website: 'karolina.hamerszmidt.eu',
  },
  qrCodeValue: 'https://karolina.hamerszmidt.eu',
  skills: {
    iAm: ['Kreatywna', 'Kooperatywna', 'Elastyczna', 'Ciężko pracująca', 'Optymistyczna'],
    iLove: ['Joga & Pilates', 'Lifestyle medicine', 'Gotowanie'],
    languages: [
      {
        level: 'język ojczysty',
        name: 'Polski',
      },
      {
        level: 'płynny',
        name: 'Angielski',
      },
      {
        level: 'dobry w mowie i piśmie (B2)',
        name: 'Niemiecki',
      },
      {
        level: 'dobry w mowie i piśmie (B2)',
        name: 'Litewski',
      },
      {
        level: 'w trakcie nauki (A2)',
        name: 'Francuski',
      },
      {
        level: 'podstawy',
        name: 'Japoński',
      },
    ],
    other: [],
  },
  socialActivities: [
    {
      activity: 'Udział w Europejskim Tygodniu Regionów i Miast w Brukseli',
      dateFinished: '',
      dateStarted: 'Paź 2019',
      organization: 'Interreg Volunteer Youth',
    },
    {
      activity: 'Współorganizator Neonaliów',
      dateFinished: '',
      dateStarted: 'Maj 2011',
      organization: 'Uniwersytet Warszawski',
    },
    {
      activity: 'Współorganizator Połowinek',
      dateFinished: '',
      dateStarted: 'Mar 2011',
      organization: 'Uniwersytet Warszawski',
    },
    {
      activity: 'Przewodniczący Samorządu Studentów',
      dateFinished: '2011',
      dateStarted: '2010',
      organization: 'Germanistyka - Uniwersytet Warszawski',
    },
    {
      activity: 'Członek Parlamentu Studentów',
      dateFinished: '2011',
      dateStarted: '2010',
      organization: 'Uniwersytet Warszawski',
    },
    {
      activity: 'Członek Samorządu Studenckiego',
      dateFinished: '2010',
      dateStarted: '2009',
      organization: 'Germanistyka - Uniwersytet Warszawski',
    },
    {
      activity: 'Wolontariusz',
      dateFinished: '',
      dateStarted: 'Sty 2009',
      organization: 'XIV Wielka Orkiestra Świątecznej Pomocy',
    },
  ],
};

const AppBase: VFC = () => {
  const { locale } = useContext(LocaleContext);
  const data = locale === Locale.EN ? cvDataEn : cvDataPl;
  return (
    <div className="App">
      <CV data={data} />
    </div>
  );
};

export const App: VFC = () => (
  <LocaleProvider>
    <AppBase />
  </LocaleProvider>
);
