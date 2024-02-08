/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SampleUpdateFormInputValues = {
    time?: number;
    data?: string;
};
export declare type SampleUpdateFormValidationValues = {
    time?: ValidationFunction<number>;
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SampleUpdateFormOverridesProps = {
    SampleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SampleUpdateFormProps = React.PropsWithChildren<{
    overrides?: SampleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sample?: any;
    onSubmit?: (fields: SampleUpdateFormInputValues) => SampleUpdateFormInputValues;
    onSuccess?: (fields: SampleUpdateFormInputValues) => void;
    onError?: (fields: SampleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SampleUpdateFormInputValues) => SampleUpdateFormInputValues;
    onValidate?: SampleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SampleUpdateForm(props: SampleUpdateFormProps): React.ReactElement;
