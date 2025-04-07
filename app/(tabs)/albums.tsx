import { MasonryFlashList } from '@shopify/flash-list'
import * as Media from 'expo-media-library'
import { Image } from 'expo-image'
import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

const Albums = () => {
  const [albums, setAlbums] = React.useState<Media.Album[]>()

  React.useEffect(() => {
    ;(async () => {
      const { status } = await Media.requestPermissionsAsync()

      if (status === 'granted') {
        await Media.getAlbumsAsync().then((data) => setAlbums(data))
      }
    })()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {albums !== undefined ? (
        <Text>Loading</Text>
      ) : (
        <MasonryFlashList
          data={albums}
          numColumns={4}
          estimatedItemSize={64}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }: { item: Media.Asset }) => (
            <Image
              source={item.uri}
              style={{
                flex: 1,
                width: 64,
                height: 64,
                marginLeft: 8,
                marginBottom: 16,
                borderRadius: 8,
              }}
            />
          )}
        />
      )}
    </View>
  )
}

export default Albums
