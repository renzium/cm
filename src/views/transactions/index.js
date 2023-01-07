// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
//import axios from 'axios'

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

// ** Demo Components
import Tabs from './Tabs'
import BillingTabContent from './BillingTabContent'
import WithdrawMethods from './WithdrawMethods'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const AccountSettings = () => {
  // ** States
  const [activeTab, setActiveTab] = useState('1')
  //const [data, setData] = useState(null)
  const toggleTab = tab => {
    setActiveTab(tab)
  }

  return (
    <Fragment>
        <Row>
          <Col xs={12}>
            <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <BillingTabContent />
              </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='2'>
                <WithdrawMethods />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
    
    </Fragment>
  )
}

export default AccountSettings
