import './App.css'
import React from 'react'
import Loader from './common/Loader/Loader'
import Table from './Table/Table'
import Sort from './Sort/Sort'
import Pagination from './common/Pagination/Pagination.jsx'

class App extends React.Component {
  state = {
    loading: false,
    data: [],
    list: [],
    currentPage: 1,
  }

  componentDidMount() {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({
        data: [
          { data: 23, distance: 100, quantity: 30, name: 'araon' },
          { data: 23, distance: 120, quantity: 310, name: 'ad' },
          { data: 23, distance: 1020, quantity: 110, name: 'gg' },
          { data: 23, distance: 1010, quantity: 310, name: 'ff' },
          { data: 23, distance: 1030, quantity: 320, name: 'gfg' },
          { data: 23, distance: 100, quantity: 30, name: 'araon' },
          { data: 23, distance: 120, quantity: 310, name: 'ad' },
          { data: 23, distance: 1020, quantity: 110, name: 'gg' },
          { data: 23, distance: 1010, quantity: 310, name: 'ff' },
          { data: 23, distance: 1030, quantity: 320, name: 'gfg' },
          { data: 23, distance: 100, quantity: 30, name: 'araon' },
          { data: 23, distance: 120, quantity: 310, name: 'ad' },
          { data: 23, distance: 1020, quantity: 110, name: 'gg' },
          { data: 23, distance: 1010, quantity: 310, name: 'ff' },
          { data: 23, distance: 1030, quantity: 320, name: 'gfg' },
          { data: 23, distance: 100, quantity: 30, name: 'araon' },
          { data: 23, distance: 120, quantity: 310, name: 'ad' },
          { data: 23, distance: 1020, quantity: 110, name: 'gg' },
          { data: 23, distance: 1010, quantity: 310, name: 'ff' },
          { data: 23, distance: 1030, quantity: 320, name: 'gfg' },
          { data: 233, distance: 12030, quantity: 3320, name: 'gfqqqg' },
        ],
        loading: false,
      })
    }, 1000)
  }

  filter = (column, type, value) => {
    this.setState({
      list: this.state.data.filter((item) => {
        switch (type) {
          case 'equal':
            return item[column].toLowerCase() === value.toLowerCase()
          case 'more than':
            return item[column] >= value
          case 'less than':
            return item[column] <= value
          case 'includes':
            return String(item[column].toLowerCase()).includes(
              String(value.toLowerCase())
            )
          default:
            break
        }
      }),
    })
  }

  setCurrentPage = (value) => {
    this.setState({ currentPage: value })
  }
  render() {
    let list

    if (this.state.list.length !== 0) {
      list = this.state.list
    } else {
      list = this.state.data
    }

    let pageSize = 5

    let pageCount = Math.ceil(list.length / pageSize)

    if (pageCount < 1) {
      pageCount = 0
    }

    let newList = list.slice(
      (this.state.currentPage - 1) * pageSize,
      (this.state.currentPage - 1) * pageSize + pageSize
    )

    return (
      <div className='container'>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div>
            <Sort filter={this.filter} />
            <Table data={newList} />
            <div className='row'>
              <Pagination
                currentPage={this.state.currentPage}
                count={pageCount}
                setCurrentPage={this.setCurrentPage}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
