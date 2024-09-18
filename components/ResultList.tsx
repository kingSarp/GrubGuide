import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResultListProps } from '@/types/resultList'

const ResultList: React.FC<ResultListProps> = ({ title }) => {
    return (
    <View>
      <Text style={styles.title}>{title}</Text>
      </View>
  )
}

export default ResultList

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight:"bold"
    }
})