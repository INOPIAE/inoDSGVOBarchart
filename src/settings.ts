"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

import powerbi from "powerbi-visuals-api";
import Fill = powerbi.Fill;

export class VisualSettings extends DataViewObjectsParser {
    public barchartProperties: BarchartProperties = new BarchartProperties();
}

export class BarchartProperties {
    sortBySize: boolean = true;
    xAxisFontSize: number = 10;
    yAxisFontSize: number = 10;
    barColor: Fill = { "solid": { "color": "#018a80" } }; // default color is  teal
}

/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
    defaultColor = new formattingSettings.ColorPicker({
        name: "defaultColor",
        displayName: "Default color",
        value: { value: "" }
    });

    showAllDataPoints = new formattingSettings.ToggleSwitch({
        name: "showAllDataPoints",
        displayName: "Show all",
        value: true
    });

    fill = new formattingSettings.ColorPicker({
        name: "fill",
        displayName: "Fill",
        value: { value: "" }
    });

    fillRule = new formattingSettings.ColorPicker({
        name: "fillRule",
        displayName: "Color saturation",
        value: { value: "" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Text Size",
        value: 12
    });

    name: string = "dataPoint";
    displayName: string = "Data colors";
    slices: Array<FormattingSettingsSlice> = [this.defaultColor, this.showAllDataPoints, this.fill, this.fillRule, this.fontSize];
}

class DSGVOCardSettings extends FormattingSettingsCard {
    otherName = new formattingSettings.TextInput({
        placeholder: "otherName",
        name: "otherName",
        displayNameKey: "F_Othername",
        value: "Other"
    });

    otherLimit = new formattingSettings.NumUpDown({
        name: "otherLimit",
        displayNameKey: "F_OtherLimit",
        value: 5
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayNameKey: "F_FontSize",
        value: 10
    });

    colorFontColor = new formattingSettings.ColorPicker({
        name: "fontColor",
        displayNameKey: "F_FontColor",
        value: { value: "" }
    });

    colorBarColor = new formattingSettings.ColorPicker({
        name: "barColor",
        displayNameKey: "F_BarColor",
        value: { value: "#018a80" }
    });

    colorBackColor = new formattingSettings.ColorPicker({
        name: "backColor",
        displayNameKey: "F_BackColor",
        value: { value: "#ffffff" }
    });

    name: string = "dsgvoSettings";
    displayNameKey: string = "F_DSGVOSettings";
    slices: Array<FormattingSettingsSlice> = [this.otherName, this.otherLimit, this.fontSize, this.colorBackColor, this.colorFontColor, this.colorBarColor];
}

class YAxisSettings extends FormattingSettingsCard {
    yTitle = new formattingSettings.TextInput({
        placeholder: "yTitle",
        name: "yTitle",
        displayNameKey: "F_Title",
        value: ""
    });

    showYTitle = new formattingSettings.ToggleSwitch({
        name: "showYTitle",
        displayNameKey: "F_showTitle",
        value: false
    });

    yAxisFontSize = new formattingSettings.NumUpDown({
        name: "yAxisFontSize",
        displayNameKey: "F_FontSize",
        value: 10
    });

    name: string = "YAxis";
    displayNameKey: string = "F_YAxis";
    slices: Array<FormattingSettingsSlice> = [this.yTitle, this.showYTitle, this.yAxisFontSize];
}

class XAxisSettings extends FormattingSettingsCard {
    xTitle = new formattingSettings.TextInput({
        placeholder: "xTitle",
        name: "xTitle",
        displayNameKey: "F_Title",
        value: ""
    });

    showXTitle = new formattingSettings.ToggleSwitch({
        name: "showXTitle",
        displayNameKey: "F_showTitle",
        value: false
    });

    xAxisFontSize = new formattingSettings.NumUpDown({
        name: "xAxisFontSize",
        displayNameKey: "F_FontSize",
        value: 10
    });

    name: string = "XAxis";
    displayNameKey: string = "F_XAxis";
    slices: Array<FormattingSettingsSlice> = [this.xTitle, this.showXTitle, this.xAxisFontSize];
}


/**
* visual settings model class
*
*/
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    // Create formatting settings model formatting cards
    dataPointCard = new DataPointCardSettings();
    DSGVOCard = new DSGVOCardSettings();
    YAxis = new YAxisSettings();
    XAxis = new XAxisSettings();

    cards = [this.DSGVOCard, this.YAxis, this.XAxis, this.dataPointCard];
}
