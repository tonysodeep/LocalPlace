import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Nha tho',
    description: 'the oldest church of all time',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/440px-Notre_dame_saigon.jpg',
    address: '20 nguyen hue',
    location: {
      lag: 10.7797855,
      lng: 106.6990189,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Nha tho 2',
    description: 'the oldest church of all time',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/440px-Notre_dame_saigon.jpg',
    address: '20 nguyen hue',
    location: {
      lag: 10.7797855,
      lng: 106.6990189,
    },
    creator: 'u2',
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);

  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find that place</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
