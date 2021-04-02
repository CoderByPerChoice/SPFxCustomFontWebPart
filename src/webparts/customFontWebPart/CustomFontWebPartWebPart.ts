import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CustomFontWebPartWebPart.module.scss';
import * as strings from 'CustomFontWebPartWebPartStrings';

export interface ICustomFontWebPartWebPartProps {
  description: string;
}

export default class CustomFontWebPartWebPart extends BaseClientSideWebPart<ICustomFontWebPartWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.customFontWebPart}">
        <div class="${styles.container}">
          <div class="${styles.row}">
            <div class="${styles.column}">
              <div class="${styles.gloriaHallelujah}">
                <span class="${styles.title}">Welcome to SharePoint!</span>
                <p class="${styles.subTitle}">Customize SharePoint experiences using Web Parts.</p>
                <p class="${styles.description}">${escape(this.properties.description)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
