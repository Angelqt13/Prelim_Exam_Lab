import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const App = () => {
  const [currentSection, setCurrentSection] = useState('name');


  const data = {
    imageUrl: require('./assets/Angel.jpg'),
    name: 'Angel Nicole R. Laspiñas',
    course: 'Bachelor of Science in Information Technology',
    education: {
      elementary: 'Sta. Quiteria Elementary School',
      elementaryYear: 2014,
      highSchool: 'Justice Eliezer Delos Santos National High School',
      highSchoolYear: 2018,
      college: 'ABE International Business College',
      collegeYear: 2019,
      college2: 'Global Reciprocal Colleges Caloocan',
      collegeYear2: 2025
    },
    about: 'I am Angel Nicole R. Laspinas currently studying in Global Reciprocal College as BSIT student. My hobbies are, Editing pictures, Soap Carving and Painting. I can also do documentations for research or capstone.',
    hobby1:
    {
      projectName: 'Edit Picture',
      imageSrc: require('./assets/edit.jpg'),
      description: 'I always capture the sunset and start to edit it by adjusting contrast, brightness and other tools to make it look better'
    },
    hobby2:
    {
      projectName: 'Painting',
      imageSrc: require('./assets/painting.jpg'),
      description: 'A good painting to me has always been like a friend.'
    },
     hobby3:
    {
      projectName: 'Soap',
      imageSrc: require('./assets/soap.jpg'),
      description: 'When our prof ask us to do soap carving i enjoyed it. So i started to do some of these.'
    },
    contact:
    {
      email: 'laspinasangelnicole0@gmail.com',
      description: '09154046172'
    }

  }

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about'
        case 'about':
          return 'hobby1'
        case 'hobby1':
          return 'hobby2'
        case 'hobby2':
          return 'hobby3'
        case 'hobby3':
          return 'contact'
        case 'contact':
          return 'name'
        default:
          return 'name'
      }
    });
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity onPress={handlePress} style={styles.mainContainer}>
          {currentSection === 'name' && (
            <>
              <View style={{alignItems:'center'}}>
                <Image source={data.imageUrl} style={styles.profileImg}/>
              </View>
              <View>
                <Text style={[styles.textHeader, {textAlign:'center'}]}>{data.name}</Text>
                <Text style={[styles.textBody, {textAlign:'center'}]}>{data.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View>
              <Text style={styles.textHeader}>Education: </Text>
              <Text style={styles.textHeaderSmall}>College:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college2}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear2}</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear}</Text>
              <Text style={styles.textHeaderSmall}>High School:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.highSchool}</Text>
              <Text style={styles.textBodySubtle}>{data.education.highSchoolYear}</Text>
              <Text style={styles.textHeaderSmall}>Elementary:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.elementary}</Text>
              <Text style={styles.textBodySubtle}>{data.education.elementaryYear}</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View>
              <Text style={styles.textHeader}>About Me: </Text>
              <Text>{data.about}</Text>
            </View>
          )}
          {currentSection === 'hobby1' && (
            <View>
              <Text style={styles.textHeader}>hobby #1:</Text>
              <Text style={styles.textHeaderSmall}>{data.hobby1.projectName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.hobbyImg} source={data.hobby1.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.hobby1.description}</Text>
            </View>
          )}
          {currentSection === 'hobby2' && (
            <View>
              <Text style={styles.textHeader}>hobby #2:</Text>
              <Text style={styles.textHeaderSmall}>{data.hobby2.projectName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.hobbyImg} source={data.hobby2.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.hobby2.description}</Text>
            </View>
          )}

          {currentSection === 'hobby3' && (
            <View>
              <Text style={styles.textHeader}>hobby #3:</Text>
              <Text style={styles.textHeaderSmall}>{data.hobby3.projectName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.hobbyImg} source={data.hobby3.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.hobby3.description}</Text>
            </View>
          )}
          {currentSection === 'contact' && (
            <View>
               <Text style={styles.textHeader}>Contact Me:</Text>
               <Text style={styles.textBodySubtle}>Email:</Text>
               <Text style={styles.textBody}>laspinasangelnicole0@gmail.com</Text>
               <Text style={styles.textBodySubtle}>Contact Number:</Text>
               <Text style={styles.textBody}>09154046172</Text>
            </View>
          )}

        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    padding: 20,
    justifyContent: 'center',
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    marginBottom: 20,
  },
    hobbyImg: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textHeaderSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textBody: {
    fontSize: 18,
    marginBottom: 12
  },
  textBodySubtle: {
    fontSize: 18,
    marginBottom: 12,
    color: 'gray'
  },
  borderRed: {
    borderWidth: 1, // border width
    borderColor: 'red', // border color
  }
})


export default App;