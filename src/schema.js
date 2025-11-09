import { ObjectId } from "mongodb";


/**
 * @property {ObjectId} _id - The unique identifier of the challenge.
 * @property {string} title - The title of the challenge.
 * @property {string} category - The category of the challenge (e.g., "Energy", "Waste").
 * @property {string} description - The description of the challenge.
 * @property {number} duration - The duration of the challenge in days.
 * @property {number} target - The target number of participants for the challenge.
 * @property {number} participants - The current number of participants in the challenge.
 * @property {string} impactMetric - The metric used to measure the impact of the challenge (e.g., "kg CO2 saved", "kg of waste reduced").
 * @property {ObjectId} createdBy - The unique identifier of the user who created the challenge.
 * @property {Date} startDate - The start date of the challenge.
 * @property {Date} endDate - The end date of the challenge.
 * @property {string} imageUrl - The URL of the image associated with the challenge.
 */
class Challenge {
    constructor(title, category, description, duration, target, participants, impactMetric, createdBy, startDate, endDate, imageUrl) {
        this._id = new ObjectId();
        this.title = title;
        this.category = category;
        this.description = description;
        this.duration = duration;
        this.target = target;
        this.participants = participants;
        this.impactMetric = impactMetric;
        this.createdBy = createdBy;
        this.startDate = startDate;
        this.endDate = endDate;
        this.imageUrl = imageUrl;
    }
}
