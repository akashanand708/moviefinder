const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
});

//BF ONBOARDING
export const ONBOARDING = asyncActionType('ONBOARDING');