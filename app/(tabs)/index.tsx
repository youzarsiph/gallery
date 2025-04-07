import { MasonryFlashList } from '@shopify/flash-list'
import * as MediaLibrary from 'expo-media-library'
import { Image } from 'expo-image'
import React from 'react'
import { View } from 'react-native'

const Home = () => {
  const [assets, setAssets] = React.useState<MediaLibrary.Asset[]>()
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions()

  React.useEffect(() => {
    ;(async () => {
      if (permissionResponse.status !== 'granted') {
        await requestPermission()
      }
      const { status } = await MediaLibrary.requestPermissionsAsync()

      if (status === 'granted') {
        await MediaLibrary.getAssetsAsync().then((data) => setAssets(data.assets))
      }
    })()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <MasonryFlashList
        data={assets}
        numColumns={4}
        estimatedItemSize={64}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }: { item: MediaLibrary.Asset }) => (
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
    </View>
  )
}

export default Home
