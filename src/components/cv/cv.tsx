/* eslint-disable react/no-multi-comp */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable react/jsx-max-depth */
import QRCode from 'qrcode.react';
import type { VFC } from 'react';
import React, { Fragment, useContext } from 'react';

import { LanguageSwitcher } from '../language-switcher';
import { Locale, LocaleContext } from '../locale-provider';

import './index.scss';
import type { CvData } from './types';

interface Props {
  readonly data: CvData;
}

// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
const Space: VFC<{ readonly size: number }> = ({ size }) => <div style={{ margin: `${size}px ${size}px 0 0` }} />;

export const CV: React.VFC<Props> = ({ data }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="CV">
      <div className="CV__paper">
        <div className="CV__person">
          <div className="CV__person__avatar">
            <img alt="Avatar" className="CV__person__avatar__img" src={data.person.avatarImg} />
          </div>
          <div className="CV__person__details">
            <div className="CV__person__details__full-name">{data.person.fullName}</div>

            <div className="CV__person__details__cv-label">Curriculum Vitae</div>

            <div className="CV__person__details__other">
              <div className="CV__person__details__other__side">
                <div className="CV__person__details__other__side__detail">
                  <span className="CV__person__details__other__side__detail__icon">
                    <i className="fas fa-calendar-alt fa-fw" />
                  </span>
                  <div className="CV__person__details__other__side__detail__lines">
                    <div className="CV__person__details__other__side__detail__lines__line">
                      {data.person.dateOfBirth}
                    </div>
                  </div>
                </div>

                <div className="CV__person__details__other__side__detail">
                  <span className="CV__person__details__other__side__detail__icon">
                    <i className="fas fa-flag fa-fw" />
                  </span>
                  <div className="CV__person__details__other__side__detail__lines">
                    <div className="CV__person__details__other__side__detail__lines__line">
                      {data.person.nationality}
                    </div>
                  </div>
                </div>

                {data.person.phoneNumber && (
                  <div className="CV__person__details__other__side__detail">
                    <span className="CV__person__details__other__side__detail__icon">
                      <i className="fas fa-mobile-alt fa-fw" />
                    </span>
                    <div className="CV__person__details__other__side__detail__lines">
                      <div className="CV__person__details__other__side__detail__lines__line">
                        {data.person.phoneNumber}
                      </div>
                    </div>
                  </div>
                )}

                {data.person.phoneNumber2 && (
                  <div className="CV__person__details__other__side__detail">
                    <span className="CV__person__details__other__side__detail__icon">
                      <i className="fas fa-mobile-alt fa-fw" />
                    </span>
                    <div className="CV__person__details__other__side__detail__lines">
                      <div className="CV__person__details__other__side__detail__lines__line">
                        {data.person.phoneNumber2}
                      </div>
                    </div>
                  </div>
                )}

                <div className="CV__person__details__other__side__detail">
                  <span className="CV__person__details__other__side__detail__icon">
                    <i className="fas fa-at fa-fw" />
                  </span>
                  <div className="CV__person__details__other__side__detail__lines">
                    <div className="CV__person__details__other__side__detail__lines__line">{data.person.email}</div>
                  </div>
                </div>

                <div className="CV__person__details__other__side__detail">
                  <span className="CV__person__details__other__side__detail__icon">
                    <i className="fas fa-globe fa-fw" />
                  </span>
                  <div className="CV__person__details__other__side__detail__lines">
                    <a
                      className="CV__person__details__other__side__detail__lines__line"
                      href={`https://${data.person.website}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {data.person.website}
                    </a>
                  </div>
                </div>

                {data.person.github ? (
                  <div className="CV__person__details__other__side__detail">
                    <span className="CV__person__details__other__side__detail__icon">
                      <i className="fab fa-github fa-fw" />
                    </span>
                    <div className="CV__person__details__other__side__detail__lines">
                      <a
                        className="CV__person__details__other__side__detail__lines__line"
                        href={`https://github.com/${data.person.github}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {data.person.github}
                      </a>
                    </div>
                  </div>
                ) : null}

                {data.person.linkedIn ? (
                  <div className="CV__person__details__other__side__detail">
                    <span className="CV__person__details__other__side__detail__icon">
                      <i className="fab fa-linkedin fa-fw" />
                    </span>
                    <div className="CV__person__details__other__side__detail__lines">
                      <a
                        className="CV__person__details__other__side__detail__lines__line"
                        href={`https://www.linkedin.com/in/${data.person.linkedIn}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {data.person.linkedIn}
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="CV__person__details__other__side">
                <div className="CV__person__details__other__side__detail">
                  <div className="CV__person__details__other__side__detail__icon">
                    <i className="fas fa-map-marked-alt fa-fw" />
                  </div>
                  <div className="CV__person__details__other__side__detail__lines">
                    <div className="CV__person__details__other__side__detail__lines__line">
                      {data.person.address1Line1}
                    </div>
                    <div className="CV__person__details__other__side__detail__lines__line">
                      {data.person.address1Line2}
                    </div>
                  </div>
                </div>
                {data.person.address2Line1 && data.person.address2Line2 ? (
                  <React.Fragment>
                    <Space size={8} />
                    <div className="CV__person__details__other__side__detail">
                      <div className="CV__person__details__other__side__detail__icon">
                        <i className="fas fa-map-marked-alt fa-fw" />
                      </div>
                      <div className="CV__person__details__other__side__detail__lines">
                        <div className="CV__person__details__other__side__detail__lines__line">
                          {data.person.address2Line1}
                        </div>
                        <div className="CV__person__details__other__side__detail__lines__line">
                          {data.person.address2Line2}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ) : null}
                {data.person.address3Line1 && data.person.address3Line2 ? (
                  <React.Fragment>
                    <Space size={8} />
                    <div className="CV__person__details__other__side__detail">
                      <div className="CV__person__details__other__side__detail__icon">
                        <i className="fas fa-map-marked-alt fa-fw" />
                      </div>
                      <div className="CV__person__details__other__side__detail__lines">
                        <div className="CV__person__details__other__side__detail__lines__line">
                          {data.person.address3Line1}
                        </div>
                        <div className="CV__person__details__other__side__detail__lines__line">
                          {data.person.address3Line2}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="CV__section">
          <div className="CV__section__header">
            <div className="CV__section__header__wrapper">
              {locale === Locale.EN ? 'WORK EXPERIENCE:' : 'DOŚWIADCZENIE ZAWODOWE:'}
            </div>
          </div>
          <div className="CV__section__content">
            <div className="CV__jobs">
              {data.jobs.map((job, jobIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={jobIndex} className="CV__jobs__job">
                  <div className="CV__jobs__job__dates">
                    <div className="CV__jobs__job__dates__wrapper">
                      <div className="CV__jobs__job__dates__wrapper__date">{job.dateFinished}</div>
                      <div className="CV__jobs__job__dates__wrapper__date">{job.dateStarted}</div>
                    </div>
                  </div>

                  <div className="CV__jobs__details">
                    <div className="CV__jobs__job__details__position">{job.position}</div>
                    <div className="CV__jobs__job__details__location">
                      {job.company}, {job.location}
                    </div>
                    {job.description.length > 0 && (
                      <div className="CV__jobs__job__details__description">
                        {job.description.map((description, descriptionIndex) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <div key={descriptionIndex} className="CV__jobs__job__details__description__paragraph">
                            {job.description.length > 1 && (
                              <span className="CV__jobs__job__details__description__paragraph__list-dot">
                                <i className="fas fa-dot-circle" />
                              </span>
                            )}
                            {description.split('\n').map((descriptionLine, descriptionLineIndex) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <Fragment key={descriptionLineIndex}>
                                {descriptionLineIndex > 0 ? <br /> : null}
                                {descriptionLine}
                              </Fragment>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                    {job.buzzwords.length > 0 && (
                      <div className="CV__jobs__job__details__buzzwords">
                        {job.buzzwords.map((buzzword, buzzwordIndex) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <div key={buzzwordIndex} className="CV__jobs__job__details__buzzwords__buzzword">
                            {buzzword}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="CV__section CV__section_small">
          <div className="CV__section__header">
            <div className="CV__section__header__wrapper">{locale === Locale.EN ? 'EDUCATION:' : 'EDUKACJA:'}</div>
          </div>
          <div className="CV__section__content">
            <div className="CV__education">
              {data.education.map((study, studyIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={studyIndex} className="CV__education__study">
                  <div className="CV__education__study__dates">
                    <div className="CV__education__study__dates__wrapper">
                      <div className="CV__education__study__dates__wrapper__date">{study.dateFinished}</div>
                      <div className="CV__education__study__dates__wrapper__date">{study.dateStarted}</div>
                    </div>
                  </div>
                  <div className="CV__education__study__details">
                    <div className="CV__education__study__details__university">{study.university}</div>
                    <div className="CV__education__study__details__faculty">{study.faculty}</div>
                    <div className="CV__education__study__details__field-of-study">{study.fieldOfStudy}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="CV__section CV__section_small">
          <div className="CV__section__header">
            <div className="CV__section__header__wrapper">
              {locale === Locale.EN ? 'SOCIAL ACTIVITY:' : 'DZIAŁALNOŚĆ SPOŁECZNA:'}
            </div>
          </div>
          <div className="CV__section__content">
            <div className="CV__social-activity">
              {data.socialActivities.map((activity, activityIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={activityIndex} className="CV__social-activity__activity">
                  <div className="CV__social-activity__activity__dates">
                    <div className="CV__social-activity__activity__dates__wrapper">
                      <div className="CV__social-activity__activity__dates__wrapper__date">
                        {activity.dateStarted}
                        {activity.dateFinished ? ` - ${activity.dateFinished}` : null}
                      </div>
                    </div>
                  </div>

                  <div className="CV__social-activity__activity__details">
                    <div className="CV__social-activity__activity__details__activity">{activity.activity}</div>
                    <div className="CV__social-activity__activity__details__organization">{activity.organization}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="CV__section CV__section_small">
          <div className="CV__section__header">
            <div className="CV__section__header__wrapper">
              {locale === Locale.EN ? 'PERSONAL SKILLS:' : 'UMIEJĘTNOŚCI:'}
            </div>
          </div>
          <div className="CV__section__content">
            <div className="CV__skills">
              <div className="CV__skills__skill">
                <div className="CV__skills__skill__icon">
                  <div className="CV__skills__skill__icon__wrapper">
                    <i className="fas fa-globe fa-fw" />
                  </div>
                </div>
                <div className="CV__skills__skill__label">{locale === Locale.EN ? 'Languages:' : 'Języki:'}</div>
                <div className="CV__skills__skill__list">
                  {data.skills.languages.map((language, languageIndex) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={languageIndex} className="CV__skills__skill__list__item">
                      {language.name} - {language.level}
                    </div>
                  ))}
                </div>
              </div>

              <div className="CV__skills__skill">
                <div className="CV__skills__skill__icon">
                  <div className="CV__skills__skill__icon__wrapper">
                    <i className="far fa-user-circle fa-fw" />
                  </div>
                </div>
                <div className="CV__skills__skill__label">{locale === Locale.EN ? 'I am:' : 'Jestem:'}</div>
                <div className="CV__skills__skill__list">
                  <div className="CV__skills__skill__list__item">{data.skills.iAm.join(', ')}</div>
                </div>
              </div>

              <div className="CV__skills__skill">
                <div className="CV__skills__skill__icon">
                  <div className="CV__skills__skill__icon__wrapper">
                    <i className="fas fa-heart fa-fw" />
                  </div>
                </div>
                <div className="CV__skills__skill__label">{locale === Locale.EN ? 'I love:' : 'Interesuję się:'}</div>
                <div className="CV__skills__skill__list">
                  {data.skills.iLove.map((love, loveIndex) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={loveIndex} className="CV__skills__skill__list__item">
                      {love}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="CV__qrcode">
              <QRCode value={data.qrCodeValue} />
            </div>
            <div className="CV__clause">{data.clause}</div>
          </div>
        </div>
      </div>
      <LanguageSwitcher />
    </div>
  );
};
