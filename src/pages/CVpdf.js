import { makers, kcl, rga } from '../data/cvData';
import { Page, Text, View, Document, StyleSheet, Canvas, PDFViewer, Font } from '@react-pdf/renderer';

import fontReg from '../fonts/AktivGrotesk/AktivGrotesk-Regular.ttf';
import fontBold from '../fonts/AktivGrotesk/AktivGrotesk-Bold.ttf';
import fontBlack from '../fonts/AktivGrotesk/AktivGrotesk-Black.ttf';
import fontMono from '../fonts/IBMPlexMono/IBMPlexMono-SemiBold.ttf';

Font.register({
  family: 'Aktiv',
  fonts: [
    {
      src: fontReg,
      format: 'truetype',
    },
    {
      src: fontBold,
      format: 'truetype',
      fontWeight: 'bold',
    },
    {
      src: fontBlack,
      format: 'truetype',
      fontWeight: 'ultrabold',
    },
  ],
});

Font.register({
  family: 'IBMPlexMono',
  fonts: [
    {
      src: fontMono,
      format: 'truetype',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: 'Aktiv',
    fontSize: 12,
    padding: '2% 5%',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  headers: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeadWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
  },
  links: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
});

const Point = ({ children }) => {
  return (
    <Text
      style={{
        margin: '5px 0',
        fontSize: 11,
        borderLeft: '1px solid black',
        paddingLeft: '5px',
      }}
    >
      {children}
    </Text>
  );
};

const MonoHeader = ({ children }) => {
  return <Text style={{ fontFamily: 'IBMPlexMono', marginTop: '12px' }}>{children}</Text>;
};

const AktivHeader = ({ children }) => {
  return <Text style={{ fontFamily: 'Aktiv', fontWeight: 'ultrabold', fontSize: 20 }}>{children}</Text>;
};

const AktivTitle = ({ children }) => {
  return <Text style={{ fontFamily: 'Aktiv', fontWeight: 'ultrabold', fontSize: 35 }}>{children}</Text>;
};

const AktivSubHeader = ({ children }) => {
  return <Text style={{ fontFamily: 'Aktiv', fontWeight: 'bold', fontSize: 15 }}>{children}</Text>;
};

const Link = ({ name, value }) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Text style={{ fontFamily: 'IBMPlexMono', alignItems: 'baseline' }}>{name}:</Text>
      <Text>{value}</Text>
    </View>
  );
};

const Para = ({ children }) => {
  return (
    <Text
      style={{
        margin: '5px 0',
        fontSize: 11,
        lineHeight: '1.7px',
      }}
    >
      {children}
    </Text>
  );
};

const Item = ({ props }) => {
  return (
    <View style={{ margin: '10px 0' }}>
      <AktivHeader>{props.title}</AktivHeader>
      <View style={styles.subHeadWrapper}>
        <AktivSubHeader>{props.subTitle}</AktivSubHeader>
        <AktivSubHeader>{props.dates}</AktivSubHeader>
      </View>
      <View>
        {props.points.map((point, index) => {
          return <Point>{point}</Point>;
        })}
      </View>
    </View>
  );
};

const MyPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headers}>
          <AktivTitle>Arthur Fincham</AktivTitle>
          <View style={styles.links}>
            <Link name="email" value="arthurfincham@me.com" />
            <Link name="loc" value="London, UK" />
            <Link name="github" value="arthurfincham" />
            <Link name="linkedin" value="arthurfincham" />
          </View>
        </View>
        <MonoHeader>ABOUT ME</MonoHeader>
        <Para>
          I'm Arthur, a recent graduate from Maker's Academy. Since I finished university in May 2021, working on Ruby and Javascript, I've been
          practicing my coding skills everyday to prepare myself for a role as a Full Stack Engineer. At the moment my focus is on React; making an
          effort to challenge myself and learn more everyday. As a naturally good communicator, I'd love to join a team that collaborates to deliver
          impactful tech.
        </Para>
        <MonoHeader>EDUCATION</MonoHeader>
        <Item props={makers} />
        <Item props={kcl} />
        <MonoHeader>EXPERIENCE</MonoHeader>
        <Item props={rga} />
      </Page>
    </Document>
  );
};

export const DownloadCV = () => {
  return (
    <PDFViewer
      style={{
        width: '100%',
        height: '95%',
      }}
    >
      <MyPDF />
    </PDFViewer>
  );
};
