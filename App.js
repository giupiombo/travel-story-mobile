import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AllPosts from './screens/AllPosts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Analytics from './screens/Analytics';
import NewPost from './screens/NewPost';
import IconButton from './components/UI/IconButton';
import { Ionicons } from '@expo/vector-icons';
import PostDetail from './screens/PostDetail';
import PostsContextProvider from './store/posts-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function PostsOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="AllPosts"
        component={AllPosts}
        options={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate('NewPost');
              }}
            />
          ),
          title: 'All Posts',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        })}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <PostsContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="PostsOverview"
              component={PostsOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewPost"
              component={NewPost}
              options={{ presentation: 'modal', title: 'New Post' }}
            />
            <Stack.Screen name="PostDetail" component={PostDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </PostsContextProvider>
    </>
  );
}
