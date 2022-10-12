/*! firebase-admin v11.1.0 */
import { SmsRegionConfig } from './auth-config';
/**
 * Interface representing the properties to update on the provided project config.
 */
export interface UpdateProjectConfigRequest {
    /**
     * The SMS configuration to update on the project.
     */
    smsRegionConfig?: SmsRegionConfig;
}
/**
 * Response received from getting or updating a project config.
 * This object currently exposes only the SMS Region config.
 */
export interface ProjectConfigServerResponse {
    smsRegionConfig?: SmsRegionConfig;
}
/**
 * Request sent to update project config.
 * This object currently exposes only the SMS Region config.
 */
export interface ProjectConfigClientRequest {
    smsRegionConfig?: SmsRegionConfig;
}
/**
* Represents a project configuration.
*/
export declare class ProjectConfig {
    /**
     * The SMS Regions Config for the project.
     * Configures the regions where users are allowed to send verification SMS.
     * This is based on the calling code of the destination phone number.
     */
    readonly smsRegionConfig?: SmsRegionConfig;
    /**
     * Validates a project config options object. Throws an error on failure.
     *
     * @param request - The project config options object to validate.
     */
    private static validate;
    /**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns A JSON-serializable representation of this object.
     */
    toJSON(): object;
}
