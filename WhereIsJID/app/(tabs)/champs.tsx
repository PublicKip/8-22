import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';
import { useState, useEffect } from 'react';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ChampDisplay } from '@/components/ChampDisplay';

export default function TabTwoScreen() {

  const [teams, setTeams] = useState([]);
  var projects = [];
  var albums = [];
  useEffect(() => {
    fetchAndSetChamps()
  }, []);

  function fetchAndSetChamps() {
    fetch('http://musicbrainz.org/ws/2/release-group/?query=artist:"jid"%20AND%20primarytype:"album"&fmt=json')
    .then(response => response.json())
    .then(data => {
      projects = data["release-groups"];
      for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        if (project.count > 1) {
          albums.push(project);
        }
      }
      setTeams(albums);
    });
  }

  var teamCardsHTML = [];

for(let i = 0; i < teams.length; i++) {
  var team = teams[i];
  var title = team["title"]
  var release = team["first-release-date"]
  var champDisplay = <ChampDisplay title={title} release={release}/>
  teamCardsHTML.push(champDisplay);
}

  return (
    <div>
      
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="star-outline" style={styles.headerImage} />}>
      <ThemedText type='title'>💿 JID Albums 💿</ThemedText>
      <ThemedText> It has been 727 since JID last dropped an album.</ThemedText> {/* this is currently hardcoded, it should be current date - latest date. */}
      <div id="recipeCardSection" style={{
        flexWrap: "wrap",
        display: "flex",
        marginBottom: "5%",
        justifyContent: "center"}}>
        {teamCardsHTML}
      </div>
    </ParallaxScrollView>
    </div>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -120,
    left: -10,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
