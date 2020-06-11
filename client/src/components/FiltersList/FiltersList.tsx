import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import { IFilters } from '@typings/state/index';
import '@styles/FiltersList.css';

interface Props {
  filters: IFilters;
  setFilter: (name: string, value: string) => void;
}

class FiltersList extends React.Component<Props> {
  handleCheck = (e: React.MouseEvent<HTMLInputElement>) => {
    const { setFilter } = this.props;

    setFilter(e.currentTarget.name, e.currentTarget.value);
  };

  render() {
    const { filters: { checked } } = this.props;

    return (
      <div className="filtersList">
        <List>
          <Subheader>Search by:</Subheader>
          <ListItem
            className="listItem"
            primaryText="Price"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="< $250" name="priceRange" value="<250" checked={checked.includes('<250')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$250 - $500" name="priceRange" value="250-500" checked={checked.includes('250-500')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$500 - $750" name="priceRange" value="500-750" checked={checked.includes('500-750')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$750-1000" name="priceRange" value="750-1000" checked={checked.includes('750-1000')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$1000-1500" name="priceRange" value="1000-1500" checked={checked.includes('1000-1500')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$2000-2500" name="priceRange" value="2000-2500" checked={checked.includes('2000-2500')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$2500-3000" name="priceRange" value="2500-3000" checked={checked.includes('2500-3000')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$3000-3500" name="priceRange" value="3000-3500" checked={checked.includes('3000-3500')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Brand"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Samsung" name="brand" value="samsung" checked={checked.includes('samsung')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Apple" name="brand" value="apple" checked={checked.includes('apple')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Huawei" name="brand" value="huawei" checked={checked.includes('huawei')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="LG" name="brand" value="lg" checked={checked.includes('lg')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="HTC" name="brand" value="htc" checked={checked.includes('htc')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Asus" name="brand" value="Asus" checked={checked.includes('Asus')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Lenevo" name="brand" value="Lenevo" checked={checked.includes('Lenevo')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="HP" name="brand" value="HP" checked={checked.includes('HP')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Dell" name="brand" value="Dell" checked={checked.includes('Dell')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Razer" name="brand" value="Razer" checked={checked.includes('Razer')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="MSI" name="brand" value="MSI" checked={checked.includes('MSI')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Acer" name="brand" value="Acer" checked={checked.includes('Acer')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Color"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Black" name="color" value="black" checked={checked.includes('black')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="White" name="color" value="white" checked={checked.includes('white')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Grey" name="color" value="grey" checked={checked.includes('grey')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Silver" name="color" value="Silver" checked={checked.includes('Silver')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="OS"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Android" name="os" value="android" checked={checked.includes('android')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="iOS" name="os" value="ios" checked={checked.includes('ios')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Windows" name="os" value="Windows" checked={checked.includes('Windows')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="macOS" name="os" value="macOS" checked={checked.includes('macOS')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Internal memory"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="16GB" name="internalMemory" value="16" checked={checked.includes('16')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="64GB" name="internalMemory" value="64" checked={checked.includes('64')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="128GB" name="internalMemory" value="128" checked={checked.includes('128')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="256GB" name="internalMemory" value="256" checked={checked.includes('256')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="512GB" name="internalMemory" value="512" checked={checked.includes('512')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1024GB" name="internalMemory" value="1024" checked={checked.includes('1024')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="RAM"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="1GB" name="ram" value="1" checked={checked.includes('1')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="3GB" name="ram" value="3" checked={checked.includes('3')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="4GB" name="ram" value="4" checked={checked.includes('4')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="6GB" name="ram" value="6" checked={checked.includes('6')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="8GB" name="ram" value="8" checked={checked.includes('8')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="16GB" name="ram" value="16" checked={checked.includes('16')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Display size"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="4.5''" name="displaySize" value="4.5" checked={checked.includes('4.5')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="5.1''" name="displaySize" value="5.1" checked={checked.includes('5.1')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="5.5''" name="displaySize" value="5.5" checked={checked.includes('5.5')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="5.8''" name="displaySize" value="5.8" checked={checked.includes('5.8')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="6.0''" name="displaySize" value="6.0" checked={checked.includes('6.0')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="6.3''" name="displaySize" value="6.3" checked={checked.includes('6.3')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="13.3''" name="displaySize" value="13.3" checked={checked.includes('13.3')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="14''" name="displaySize" value="14" checked={checked.includes('14')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="15''" name="displaySize" value="15" checked={checked.includes('15')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="15.6''" name="displaySize" value="15.6" checked={checked.includes('15.6')} onCheck={this.handleCheck} />
            
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Display resolution"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="540x960" name="displayResolution" value="540x960" checked={checked.includes('540x960')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1080x1920" name="displayResolution" value="1080x1920" checked={checked.includes('1080x1920')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1125x2436" name="displayResolution" value="1125x2436" checked={checked.includes('1125x2436')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1440x2560" name="displayResolution" value="1440x2560" checked={checked.includes('1440x2560')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1440x2880" name="displayResolution" value="1440x2880" checked={checked.includes('1440x2880')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1440x2960" name="displayResolution" value="1440x2960" checked={checked.includes('1440x2960')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1920 X 1080" name="displayResolution" value="1920 X 1080" checked={checked.includes('1920 X 1080')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="2160 X 1080" name="displayResolution" value="2160 X 1080" checked={checked.includes('2160 X 1080')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="3840 X 2160" name="displayResolution" value="3840 X 2160" checked={checked.includes('3840 X 2160')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Camera"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="8Mpix" name="camera" value="8" checked={checked.includes('8')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="12Mpix" name="camera" value="12" checked={checked.includes('12')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="13Mpix" name="camera" value="13" checked={checked.includes('13')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="16Mpix" name="camera" value="16" checked={checked.includes('16')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="CPU"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Dual Core" name="cpu" value="dual_core" checked={checked.includes('dual_core')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Quad Core" name="cpu" value="quad_core" checked={checked.includes('quad_core')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Hexa Core" name="cpu" value="hexa_core" checked={checked.includes('hexa_core')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Octa Core" name="cpu" value="octa_core" checked={checked.includes('octa_core')} onCheck={this.handleCheck} />
            ]}
          />
        </List>
      </div>
    )
  }
};

export default FiltersList;