import React, { findDOMNode, Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import * as action from '../actions/'

class App extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.propsValue} onChange={this.changeHandle.bind(this)}
          ref='input'
        />
      <p>propsValue-->>>{this.props.propsValue}</p>
      <p>{this.underscore()}</p>
      </div>
    )
  }
  changeHandle() {
    const node = ReactDOM.findDOMNode(this.refs.input)
    const value = node.value.trim()
    this.props.change(value)
  }
  underscore() {
    const arr1 = [1,2,3]
    const arr2 = [4,6,1,2,3,4,5,6,7,7]
    const arr3 = [arr1, arr2]
    const arrLike = {one: 1, two: 2, three: 3}
    const arrObj = [
      {title: 't1', author: 'a1', year: '01'},
      {title: 't2', author: 'a2', year: '01'},
      {title: 't3', author: 'a3', year: '02'}
    ]
    let t_map = _.map(arr1, (num, key) => { return num * key })
    let t_map2 = _.map(arrLike, (num, key) => { return num * 2 })
    let t_map3 = _.map(arr3, _.first)
    let t_map4 = _.map(arrLike, (num, key) => { return num + key })
    let t_map5 = _.map(arr3, (num) => { return num[0] * num[1] })
    let t_reduce = _.reduce(arr1, (memo, num) => { return memo * num }, 10)
    let t_reduceRight = _.reduceRight(arr3, (a, b) => { return a.concat(b)}, [55,44])
    let t_find = _.find(arr2, (num) => { return num > 3 })
    let t_filter = _.filter(arr2, (num) => { return num > 3 })
    let t_where = _.where(arrObj, {year: '01'})
    let t_reject = _.reject(arr2, (num) => { return num > 4 })
    let t_every = _.every(arr2, (num) => { return num > 2 })
    let t_every2 = _.every(arr2, _.identity)
    let t_some = _.some(arr2, (num) => { return num > 6 })
    let t_some2 = _.some([null, 0, 'yes', false])
    let t_contains = _.contains(arr2, 3)
    let t_invoke = _.invoke(arr3, 'sort')
    let t_pluck = _.pluck(arrObj, 'title')
    let t_max = _.max(arrObj, (obj) => { return obj.year })
    let t_max2 = _.max(arr2)
    let t_min = _.min(arr2)
    let t_sortBy1 = _.sortBy(arr2, (num) => { return Math.sign(num) })
    let t_sortBy2 = _.sortBy(arrObj, 'title')
    let t_groupBy1 = _.groupBy([1.2, 2.4, 2.5, 5.4, 4.5, 4.3], (num) => { return Math.floor(num)})
    let t_groupBy2 = _.groupBy(['one', 'two', 'three', 'four'], 'length')
    let t_countBy = _.countBy(arr2, (num) => { return num % 2 === 0 ? 'even' : 'odd' })
    let t_shuffle = _.shuffle(arr2)
    let t_sample1 = _.sample(arr2)
    let t_sample2 = _.sample(arr2, 3)
    let t_toArray = (function() { return _.toArray(arguments).slice(1)})(1, 2, 3, 4)
    let t_size = _.size(arr2)
    let t_size2 = _.size(arr3)
    let t_size3 = _.size(arrObj)
    let t_first = _.first(arr2)
    let t_initial = _.initial(arr2)
    let t_last = _.last(arr2)
    let t_rest = _.rest(arr2)
    let t_compact = _.compact([0, 1, false, 2, '', 3])
    let t_flatten = _.flatten(arr3)
    let t_without = _.without(arr2, 0, 1, 2, 3)
    let t_union = _.union(arr1, arr2)
    let t_intersection = _.intersection(arr1, arr2)
    let t_difference = _.difference([1, 2, 3, 4, 5], [5, 2, 10])
    let t_uniq = _.uniq([1, 2, 1, 3, 2, 4])
    let t_zip = _.zip(['t1', 't2', 't3'], ['w1', 'w2', 'w3'], ['k1', 'k2', 'k3'])
    let t_unzip = _.unzip([['t1', 'w1', 'k1'], ['t2', 'w2', 'k2'], ['t3', 'w3', 'k3']])

    return (
      <div>
        <ul>
          <li>{`_.map(list, iteratee, [context])-->${t_map}--->${t_map5}`}</li>
          <li>{`_.map(list, iteratee, [context])-->${t_map2}`}</li>
          <li>{`_.map(list, iteratee, [context])-->${t_map3}`}</li>
          <li>{`_.map(list, iteratee, [context])-->${t_map4}`}</li>
        </ul>
        <ul>
          <li>{`_.reduce(list, iteratee, [memo], [context])--->${t_reduce}`}</li>
          <li>{`_.reduceRight(list, iteratee, memo, [context])-->${t_reduceRight}`}</li>
          <li>{`_.find(list, predicate, [context])-->${t_find}`}</li>
          <li>{`_.filter(list, predicate, [context])-->${t_filter}`}</li>
        </ul>
        <ul>
          <li>{`_.where(list, properties)-->${t_where}`}</li>
          <li>{`_.reject(list, predicate, [context])-->${t_reject}`}</li>
          <li>{`_.every(list, [predicate], [context])-->${t_every}-->${t_every2}`}</li>
          <li>{`_.some(list, [predicate], [context])-->${t_some}-->${t_some2}`}</li>
        </ul>
        <ul>
          <li>{`_.contains(list, value, [fromIndex])-->${t_contains}-->${t_invoke}`}</li>
          <li>{`_.pluck(list, propertyName)-->${t_pluck}-->${t_max}-->${t_max2}`}</li>
          <li>{`_.min(list, [iteratee], [context])-->${t_min}`}</li>
          <li>{`_.sortBy(list, iteratee, [context])-->${t_sortBy1}-->${t_sortBy2}`}</li>
        </ul>
        <ul>
          <li>{`_.groupBy(list, iteratee, [context])-->${t_groupBy1}-->${t_groupBy2}`}</li>
          <li>{`_.countBy(list, iteratee, [context])-->${t_countBy}`}</li>
          <li>{`_.suffle(list)-->${t_shuffle}`}</li>
          <li>{`_.sample(list, [n])-->${t_sample1}-->${t_sample2}`}</li>
        </ul>
        <ul>
          <li>{`_.toArray(list)-->${t_toArray}`}</li>
          <li>{`_.size(list)-->${t_size}-->${t_size2}-->${t_size3}`}</li>
          <li>{`_.first(array, [n])-->${t_first}`}</li>
          <li>{`_.initial(array, [n])-->${t_initial}-->${t_last}`}</li>
          <li>{`_.rest(array, [index])-->${t_rest}`}</li>
        </ul>
        <ul>
          <li>{`_.compact(array)-->${t_compact}`}</li>
          <li>{`_.flatten(array, [shallow])-->${t_flatten}`}</li>
          <li>{`_.without(array, *values)-->${t_without}`}</li>
          <li>{`_.union(*arrays)-->${t_union}`}</li>
          <li>{`_.intersection(*arrays)-->${t_intersection}`}</li>
          <li>{`_.difference(array, *others)-->${t_difference}`}</li>
        </ul>
        <ul>
          <li>{`_.uniq(array, [isSorted], [iteratee])-->${t_uniq}`}</li>
          <li>{`_.zip(*arrays)-->${t_zip}-->_.unzip(*arrays)-->${t_unzip}`}</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}

mapStateToProps = (state) => {
  return {
    propsValue: state.value,
    reducersValue: state.reducers,
    actiontry1Value: state.actiontry1,
    actiontry2Value: state.actiontry2,
    twk: 't11t',
    v2: state.v2,
  }
}

export default connect(mapStateToProps, action)(App)
