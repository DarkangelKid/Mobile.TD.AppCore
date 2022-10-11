/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

import {Colors, Fonts, Images} from '@app/themes';
import SQLiteHelper from '@app/utils/SQLiteHelper';
import {Header} from '@app/components';

const sqliteH = new SQLiteHelper({name: 'tdcore.db', createFromLocation: 1});

const RenderItem = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={Math.random().toString()}
      style={{paddingVertical: 16, marginStart: 10}}
      onPress={() => {
        navigation.navigate('LoaiDichVu_DetailScreen', {
          data: {tableName: 'tbLoaiDichVu', tableTitle: 'Loại hình dịch vụ', ...props?.item},
        });
      }}>
      <Text style={{fontSize: 14, color: Colors.lineblack}} numberOfLines={1}>
        {props?.item?.Name ?? ''}
      </Text>
    </TouchableOpacity>
  );
};

const ListLoaiDichVuScreen = () => {
  const navigation = useNavigation();
  const random = useSelector(state => state.global.random);
  const route = useRoute();
  const dataParam = route.params?.data ?? null;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const tmp = async () => {
      setIsLoading(true);
      //const {res, errr} = await sqliteH.selectItems('tbLoaiDichVu', '*');
      const {res} = await sqliteH.selectItems(dataParam?.tableName, {
        columns: '*',
        orderBy: 'Name ASC',
      });
      setData(res ?? []);
      setIsLoading(false);
    };
    tmp();
  }, [dataParam?.tableName, random]);

  const keyExtractor = useCallback(item => Math.random().toString(), []);
  const renderItem = useCallback(({item}) => <RenderItem item={item} />, []);

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <Header
        title={dataParam?.tableTitle ?? ''}
        isStack={true}
        RightComponent={() => (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 24,
              height: 24,
            }}
            onPress={() => {
              navigation.navigate('LoaiDichVu_DetailScreen');
            }}>
            <FontAwesome name={'plus'} color={Colors.white} size={24} duotone />
          </TouchableOpacity>
        )}
      />
      <View style={{flex: 1}}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fb8c00" style={{flex: 1, justifyContent: 'center'}} />
        ) : (
          <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            ListEmptyComponent={() => <Text style={{textAlign: 'center', color: '#50565B', margin: 10}}>Không có dữ liệu</Text>}
            ItemSeparatorComponent={() => <View style={{backgroundColor: Colors.gray60, height: 1, marginHorizontal: 10}} />}
            keyExtractor={keyExtractor}
          />
        )}
      </View>
    </View>
  );
};

export default ListLoaiDichVuScreen;

const styles = StyleSheet.create({});
